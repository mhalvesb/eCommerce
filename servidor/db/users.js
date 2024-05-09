const Sequelize = require("sequelize");
const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD,{
    host: DATABASE_HOST,
    dialect: "mysql",
    port: DATABASE_PORT,
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


