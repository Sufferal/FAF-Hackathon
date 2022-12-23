const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'hackaton',
    'root',
    'Password123$',
     {
       host: '127.0.0.1',
       dialect: 'mysql'
     }
   );

module.exports = {sequelize}