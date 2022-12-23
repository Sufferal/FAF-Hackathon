const Sequelize = require("sequelize");
const sequelize = require('./sequelize').sequelize


const createTable = sequelize.sync().then(() => {
    console.log('Tables were created successfully!');
 }).catch((error) => {
    console.error('Unable to create the tables : ', error);
 }); 

 module.exports = {country, rentals};