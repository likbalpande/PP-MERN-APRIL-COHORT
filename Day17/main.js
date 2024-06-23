const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://likhileshcogoport:test1234@cluster0.tn2fkag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

// cluster--> multiple databases --> multiple collections -> multiple documents

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);

app.listen(1400);
