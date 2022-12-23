const Sequelize = require("sequelize");
const sequelize = require('./sq').sequelize

const country = sequelize.define("country", {
    country_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false
    },
    status_id: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false
    },
 });

const status = sequelize.define("country", {
    status_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false
    },
 });
 

country.hasOne(status, {
    foreignKey: {
        name: "status_id"
    }
})


const createTable = sequelize.sync().then(() => {
    console.log('Tables were created successfully!');
 }).catch((error) => {
    console.error('Unable to create the tables : ', error);
 }); 

 module.exports = {country, status};