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
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
})


app.get("/", (req, res) =>{
    res.json({message: "Ok"});
})




app.get("/users", async (req, res) =>{
    try{
        const [results] = await db.sequelize.query("SHOW TABLES");
        const tables = results.map(result => result.Tables_in_sql10705200);

        const datas = tables.map( async(table) =>{
            const [tableData] = await db.sequelize.query(`SELECT * FROM ${table}`);
            return {table, data: tableData}
        });
        const allData = await Promise.all(datas);
        res.json(allData);

    } catch(error){
        console.log(error);
        res.status(500).json({message: "Erro ao buscar dados do banco de dados"});
    }

    
});


app.post("/users", async (req, res) =>{
    const email = req.body.email;
    const senha = req.body.senha;
    const login = req.body.login;
    const nome = req.body.nome;
    

    

    db.users.findOne({where:{
        email: email
    }}).then(usuario =>{
        if(usuario){
            res.status(200).json({error: "Já há um usuario cadastrado"})
            
        } else{
            db.users.create({
                email: email,
                senha: senha,
                login: login,
                nome: nome
            });
            res.status(200).json({success: "Usuário cadastrado com sucesso"});
        }
    });

    console.log(req.flash("success_msg"));
});

app.post("/login", async (req, res)=>{
    passport.authenticate("local", (error, user, message) => {
        if (error) {
            console.error(error);
            return error;
        }
        if (!user) {
            return res.status(401).json({ error: "Usuário não encontrado ou senha inválida" });
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






