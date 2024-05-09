const Sequelize = require("sequelize");
const sequelize = new Sequelize("sql10705200", "sql10705200", "e8waRMlr8R",{
    host: "sql10.freesqldatabase.com",
    port: 3306,
    dialect: "mysql",
    
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


