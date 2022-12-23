const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'bda_proj',
    'grena',
    'D123456',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );

module.exports = {sequelize}