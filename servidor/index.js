const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {MongoClient, ServerApiVersion } = require("mongodb");
const myUrl = "mongodb+srv://matheusalvesbr21:mth123@cluster0.ik1mw9r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const session = require("express-session");

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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
        const db = client.db("usuarios");
        const collection = db.collection("meuusuarios");
        const result = await collection.find({}).toArray();
        console.log(result);
    } catch(err){
        console.log(err);
    }
}

connectMyMongoDb();



app.post("/login", async (req, res ,next) =>{
    try{
        console.log(req.body);
        await client.connect();
        const db = client.db("usuarios");
        const collection = db.collection("meuusuarios");
        const login = await collection.insertOne({usuarios: req.body.usuario, senha: req.body.password});
        res.status(200).send("Login efetuado com sucesso");
        next();
    }catch(err){
        res.status(500).send("Algum erro aconteceu");
    }
})




app.listen(8080, () =>{
    console.log("Porta iniciada no servidor 8080");
});