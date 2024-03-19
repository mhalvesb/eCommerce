const express= require("express");
const app = express();
const session = require("express-session");
const sequelize = require("sequelize");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/users.js");



app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

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




app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080");
})







