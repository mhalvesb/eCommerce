const express= require("express");
const app = express();
const session = require("express-session");
const sequelize = require("sequelize");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/users.js");
const flash = require("connect-flash");
const passport = require("passport");


app.use(session({
    secret: 'seu_segredo_aqui',
    resave: false,
    saveUninitialized: true
}));

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
    res.json({
        success: req.flash("success")
    })
})


app.post("/users", async (req, res) =>{
    const email = req.body.email;
    const senha = req.body.senha;


    db.users.create({
        email: email,
        senha: senha
    });

    req.flash("success", "Conta criada com sucesso");
    res.status(201).json({message: "Conta criada com sucesso"});
    
})




app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080");
})







