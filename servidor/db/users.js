const Sequelize = require("sequelize");
const sequelize = new Sequelize("sql10707041", "sql10707041", "E4wUyUxDpe",{
    host: "sql10.freesqldatabase.com",
    port: 3306,
    dialect: "mysql",
    dialectModule: require('mysql2'),
    
});


console.log(sequelize);

const users = sequelize.define("usuarios", {
    email: {
        type: Sequelize.STRING(255)
    },
    senha: {
        type: Sequelize.STRING(255)
    },
    login:{
        type: Sequelize.STRING(255)
    },
    nome: {
        type: Sequelize.STRING(255)
    }
});


sequelize.sync();



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    users: users
}


