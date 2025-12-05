const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');




// Middleware
app.use(express.json());
app.use(cors());


const uri = `${process.env.URI}`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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

        const db = client.db("zapShiftDB");
        const parcelsCollection = db.collection("parcels");


        // API to add a parcel
        app.get('/parcels', async (req, res) => {
            const query = {};
            const {email} = req.query;
            if(email){
                query.senderEmail = email;
            }
            const cursor = parcelsCollection.find(query);
            const parcels = await cursor.toArray();
            res.send(parcels);
        });

        app.post('/parcels', async (req, res) => {
            const parcel = req.body;
            // console.log(parcel);
            const result = await parcelsCollection.insertOne(parcel);
            res.send(result);
        });










        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Zap is Shifting!');
});


app.listen(port, () => {
    console.log(`Zap is running on port ${port}`);
});