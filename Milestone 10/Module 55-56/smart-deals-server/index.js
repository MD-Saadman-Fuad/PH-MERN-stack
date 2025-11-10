const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const app = express();
const admin = require("firebase-admin");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000;




const serviceAccount = require("./smart-deals-firebase-admin-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});



app.use(express.json());
app.use(cors());

// const logger = (req, res, next) => {
//     console.log('Request Info:');
//     next();
// }

const verifyFirebaseToken = async (req, res, next) => {

    const auth = req.headers.authorization;
    // console.log('Authorization Header:', auth);
    if (!auth) {
        return res.status(401).send({ message: 'Unauthorized access' });
    }

    const token = auth.split(' ')[1];
    // console.log('Extracted Token:', token);
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized access' });
    }
    //verify token using firebase admin sdk

    try {
        const userInfo = await admin.auth().verifyIdToken(token);
        // console.log('Decoded Token Info:', userInfo);
        req.token_email = userInfo.email;
        next();
    } catch {
        return res.status(401).send({ message: 'Unauthorized access' });
    }


}

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qrspure.mongodb.net/?appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qrspure.mongodb.net/?appName=Cluster0`;
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
        const bidsCollection = db.collection('bids');
        const usersCollection = db.collection('users');

        //jwt related apis

        app.post('/getToken', (req, res)=>{
            const loggedUserEmail = req.body.email;
            const token = jwt.sign({email: loggedUserEmail}, process.env.JWT_SECRET, {expiresIn: '1h'});
            res.send({token});
        })

        //Users related APIs

        //get all users
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });
        //get single user
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.findOne(query);
            res.send(result);
        });


        //post user
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const email = req.body.email;
            //check if user already exists
            const query = { email: email };
            const existingUser = await usersCollection.findOne(query);

            if (existingUser) {
                return res.status(409).send({ message: 'User already exists' });
            } else {
                const result = await usersCollection.insertOne(newUser);
                res.send(result);
            }


        });


        //GET API to read all products
        app.get('/products', async (req, res) => {

            console.log(req.query);
            // Using query parameters to filter products by email
            const email = req.query.email;
            const query = {};
            if (email) {
                query.email = email;
            }

            const cursor = productsCollection.find(query);
            // const cursor = productsCollection.find().sort({ price_min: -1 }).skip(2).limit(5).project({ title: 1, price_min: 1 });
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

        //GET latest products (6)
        app.get('/latest-products', async (req, res) => {
            const cursor = productsCollection.find().sort({ createdAt: -1 }).limit(6);
            const result = await cursor.toArray();
            // console.log(result);
            res.send(result);
        })


        //POST API to add product
        app.post('/products', async (req, res) => {
            const newProduct = req.body;
            const result = await productsCollection.insertOne(newProduct);
            res.send(result);
        });

        //Patch API to update product
        app.patch('/products/:id', verifyFirebaseToken, async (req, res) => {
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

        //Bids related APIs

        //GET API to read all bids
        app.get('/bids', verifyFirebaseToken, async (req, res) => {
            // console.log('header', req.headers);
            const email = req.query.email;
            const query = {};
            if (email) {
                if (email !== req.token_email) {
                    return res.status(403).send({ message: 'Forbidden access' });
                }
                query.buyer_email = email;
            }

            const cursor = bidsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })

        //Get API to read single bid
        app.get('/bids/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await bidsCollection.findOne(query);
            res.send(result);
        });
        //Get API to read bids for a specific product
        app.get('/bids/byProduct/:productId', async (req, res) => {
            const productId = req.params.productId;
            const query = { product: productId };
            const cursor = bidsCollection.find(query).sort({ bid_price: -1 });
            const result = await cursor.toArray();
            res.send(result);
        });


        //GET bids posted by my email
        // app.get('bids/myBids/:email', async (req, res) => {
        //     const email = req.params.email;
        //     const query = { buyer_email: email };
        //     const cursor = bidsCollection.find(query).sort({ createdAt: 1 });
        //     const result = await cursor.toArray();
        //     res.send(result);
        // });

        //POST API to add bid
        app.post('/bids', async (req, res) => {
            const newBids = req.body;
            const result = await bidsCollection.insertOne(newBids);
            res.send(result);
        });

        //Delete API to delete bid
        app.delete('/bids/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await bidsCollection.deleteOne(query);
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