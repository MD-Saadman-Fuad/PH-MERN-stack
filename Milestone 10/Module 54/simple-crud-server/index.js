const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Simple CRUD Server is running');
});

//simpleDBuser
//J3aa6IKpLg8W5WhZ
const uri = "mongodb+srv://simpleDBuser:J3aa6IKpLg8W5WhZ@cluster0.qrspure.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const usersDB = client.db('usersDB');
        const usersCollection = usersDB.collection('users');

        //add database realted apis 

        //GET API to read all users
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        //GET API to read single user
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            // console.log('getting user with id:', id);
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.findOne(query);
            res.send(result);
        })

        //POST API to add user
        app.post('/users', async (req, res) => {
            // console.log('hitting the post');
            const newUser = req.body;
            console.log('new user', newUser);
            const result = await usersCollection.insertOne(newUser);
            res.send(result);

        });

        //PATCH API to update user
        app.patch('/users/:id', async (req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            console.log('updating user with id:', id, updatedUser);
            const query = { _id: new ObjectId(id) };
            const update = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                }
            };
            const options = {};
            const result = await usersCollection.updateOne(query, update, options);
            res.send(result);
        });

        //Delete API to delete user
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            // console.log('deleting user with id:', id);
            const query = { _id: new ObjectId(id) };
            // make sure we await the delete operation so `result` is the resolved object
            const result = await usersCollection.deleteOne(query);
            console.log('deleted', result);
            // return JSON so the client can check `deletedCount` or similar fields
            res.send(result);
        });


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close(); //we dont want to close connection
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Simple CRUD Server is running on port: ${port}`);
});