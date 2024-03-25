const Sequelize = require("sequelize");
const sequelize = new Sequelize("logins", "root", "teteu778", {
    host: "localhost",
    dialect: "mysql"
});



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}