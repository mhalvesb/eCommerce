const express= require("express");
const app = express();
const session = require("express-session");
const sequelize = require("sequelize");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/users.js");
const flash = require("connect-flash");
const passport = require("passport");
require("./config/auth.js")(passport);


app.use(session({
    secret: "curso", 
    resave: true, 
    saveUninitialized: true,
    }));


app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(flash());



app.get("/users", async (req, res) =>{
    try{
        const [results] = await db.sequelize.query("SHOW TABLES");
        const tables = results.map(result => result.Tables_in_logins);

        const datas = tables.map( async(table) =>{
            const [tableData] = await db.sequelize.query(`SELECT * FROM ${table}`);
            return {table, data: tableData}
        });

        const allData = await Promise.all(datas);
        res.json(allData);

    } catch(error){

    }
});

app.get("/flash", (req, res)=>{

    res.json(req.flash("success_msg"));

})


app.post("/users", async (req, res) =>{
    const email = req.body.email;
    const senha = req.body.senha;

    req.flash("success_msg", "Conta criada com sucesso");

    db.users.create({
        email: email,
        senha: senha
    });
    
    
   
    console.log(req.flash("success_msg"));
})




app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080");
})







