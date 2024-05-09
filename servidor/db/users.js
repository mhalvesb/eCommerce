const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD,{
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    port: process.env.DATABASE_PORT,
});



const users = sequelize.define("usuarios", {
    email: {
        type: Sequelize.STRING(50)
    },
    senha: {
        type: Sequelize.INTEGER
    },
    login:{
        type: Sequelize.STRING(20)
    },
    nome: {
        type: Sequelize.STRING(20)
    }
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    users: users
}


