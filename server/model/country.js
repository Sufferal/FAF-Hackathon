const Sequelize = require("sequelize");
const sequelize = require('./sequelize').sequelize

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

const createTable = sequelize.sync().then(() => {
  console.log('Table country were created successfully!');
}).catch((error) => {
  console.error('Unable to create the tables : ', error);
}); 

module.exports = {country}