const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {MongoClient, ServerApiVersion } = require("mongodb");
const myUrl = "mongodb+srv://matheusalvesbr21:mth123@cluster0.ik1mw9r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const session = require("express-session");
const localStrategy = require("passport-local").Strategy;
const passport = require("passport");
const flash = require("flash");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(session({
    secret: "secret"
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
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


  async function ConnectDb(){
        try{
            await client.connect();
        }catch(err){

        }
  }


ConnectDb();

passport.serializeUser((user, done) => {
    console.log("Serialize User");
    done(null, user);
});

passport.deserializeUser( async (id, done) => {
    console.log("Deserialize User");
    const db = client.db("usuarios");
    const collection = db.collection("meuusuarios");
    
    try {
        console.log("procurando usuario");
        const user = await collection.findOne({usuario: id.usuario});

        if (!user) {
            console.log("Usuario não encontrado");
            return done(null, false);
            
        }
        console.log("Usuario encontrado");
        console.log(user);
        return done(null, user);
    } catch(err) {
        console.log("Erro encontrado");
        return done(null, err);
    }
});



passport.use(new localStrategy({usernameField: "usuario", passwordField: "senha"}, async (usuario, senha, done) =>{
        const db = client.db("usuarios");
        const collection = db.collection("meuusuarios");
       // console.log(senha);
        try{
            const user = await collection.findOne({usuario: usuario});

            if(!user){
                console.log("sem usuario");
                return done(null, false);
            } else{
                console.log("há usuario");
                return done(null, user);
            }

        }catch(err){
            console.log(err);
        }
   
    
}));



app.get("/user", (req, res) =>{
    if(req.user){
        res.send(`Ola ${req.user.usuario}`);
    } else{
        res.send("Ok");
    }
});

app.post("/login", async (req, res, next) =>{
    try{
        await passport.authenticate("local", {
            successRedirect: ("/user"),
            failureRedirect: ("/user"),
            failureFlash: true
        })(req, res, next);
    }catch(err){

    }
});


app.listen(8080, () =>{
    console.log("Porta iniciada no servidor 8080");
});