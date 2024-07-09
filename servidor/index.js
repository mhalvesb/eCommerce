const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {MongoClient, ServerApiVersion } = require("mongodb");
const myUrl = "mongodb+srv://matheusalvesbr21:mth123@cluster0.ik1mw9r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const mongoClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


const client = new MongoClient(myUrl, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });



async function connectMyMongoDb(){
    try{
        await client.connect();
        console.log("Cliente conectado");
    } catch(err){
        console.log(err);
    }
}

connectMyMongoDb();





app.listen(8080, () =>{
    console.log("Porta iniciada no servidor 8080");
});