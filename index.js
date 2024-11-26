const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000 ;
const app = express();
 
// 22103412
// omDSUul9PY4pvChT



const uri = "mongodb+srv://22103412:omDSUul9PY4pvChT@cluster0.i7pwp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.use(cors())
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Simple crud is running')
})

app.listen(port, ()=>{
    console.log(`simple crud is running on port: ${port}`)
})