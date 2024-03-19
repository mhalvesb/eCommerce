const Sequelize = require("sequelize");
const sequelize = new Sequelize("logins", "root", "teteu778",{
    host: "localhost",
    dialect: "mysql"
});



const users = sequelize.define("usuarios", {
    email: {
        type: Sequelize.STRING(50)
    },
    senha: {
        type: Sequelize.INTEGER
    }
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    users: users
}


