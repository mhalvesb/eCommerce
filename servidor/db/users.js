const Sequelize = require("sequelize");
const sequelize = new Sequelize("sql10707025", "sql10707025", "j6gr1smwIk",{
    host: "sql10.freemysqlhosting.net",
    port: 3306,
    dialect: "mysql",
    dialectModule: require('mysql2'),
    
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


sequelize.sync();

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    users: users
}


