const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://smartDBuser:vW3qBcB1xL9KoLbj@cluster0.qrspure.mongodb.net/?appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});





app.get('/', (req, res) => {
    res.send('Smart Deals Server is running');
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        //database setup
        const db = client.db('smartDealsDB');
        const productsCollection = db.collection('products');

        //GET API to read all products
        app.get('/products', async (req, res) => {
            // const cursor = productsCollection.find();
            const cursor = productsCollection.find().sort({ price_min: -1 }).skip(2).limit(5).project({ title: 1, price_min: 1 });
            const result = await cursor.toArray();
            res.send(result);
        });

        //GET API to read a single product
        app.get('/products/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await productsCollection.findOne(query);
            res.send(result);
        });


        //POST API to add product
        app.post('/products', async (req, res) => {
            const newProduct = req.body;
            const result = await productsCollection.insertOne(newProduct);
            res.send(result);
        });

        //Patch API to update product
        app.patch('/products/:id', async (req, res) => {
            const id = req.params.id;
            const updatedProduct = req.body;
            const query = { _id: new ObjectId(id) };
            const update = {
                $set: {
                    name: updatedProduct.name,
                    price: updatedProduct.price,
                }
            }
            const result = await productsCollection.updateOne(query, update);
            res.send(result);

        })

        //Delete API to delete product
        app.delete('/products/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await productsCollection.deleteOne(query);
            res.send(result);
        });



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // Do NOT close the client here — we want the server to keep the DB connection
        // open while the process is running so route handlers can use `productsCollection`.
        // If you need to close on shutdown, handle it in a SIGINT/SIGTERM listener.
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Smart Deals Server is running on port: ${port}`);
});