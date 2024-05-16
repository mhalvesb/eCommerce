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

app.use(cors());
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
app.use(flash());
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
})


app.get("/", (req, res) =>{
    res.send("Tudo Ok");
})


app.get("/users", async (req, res) =>{
    try{
        const [results] = await db.sequelize.query("SHOW TABLES");
        const tables = results.map(result => result.Tables_in_sql10707041);

        const datas = tables.map( async(table) =>{
            const [tableData] = await db.sequelize.query(`SELECT * FROM ${table}`);
            return {table, data: tableData}
        });
        const allData = await Promise.all(datas);
        res.json(allData);

    } catch(error){

    }

    
});


app.post("/users", async (req, res) => {

    const email = req.body.email;
    const senha = req.body.senha;
    const login = req.body.login;
    const nome = req.body.nome;

    try {
        const usuario = await db.users.findOne({ where: { email: email } });
        if (usuario) {
            return res.status(400).json({ error: "Já há um usuário cadastrado com este e-mail" });
        }

        await db.users.create({
            email: email,
            senha: senha,
            login: login,
            nome: nome
        });

        // Envie a resposta após o usuário ser criado com sucesso
        res.status(201).json({ success: "Usuário cadastrado com sucesso" });
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        // Envie uma resposta de erro se algo der errado
        res.status(500).json({ error: "Erro ao processar sua solicitação" });
    }
});

app.post("/login", async (req, res)=>{

    passport.authenticate("local", (error, user, info) => {
        if (error) {
            console.error(error);
            return error;
        }
        if (!user) {
            return res.status(401).json({error: info.message});
        }

        req.login(user, (err) => {
            if (err) {
                console.error(err);
                return err;
            }
            console.log("Usuário encontrado:", user);
            return res.json({ user });
        });
    })(req, res);
});




app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080");
});






