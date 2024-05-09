const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.USERNAME, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    dialectModule: 'mysql2',
    
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


