const Sequelize = require("sequelize");
const sequelize = require('./sequelize').sequelize
const country = require('./country').sequelize

const rentals = sequelize.define("rentals", {
  rentals_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    required: true,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    required: false,
    allowNull: true
  },
});

rentals.hasOne(country)
rentals.belongsTo(country, {
  foreignKey: {
      name: "country_id"
  }
})

rentals.hasOne(country)
rentals.dependsOn(country, {
  foreignKey: "country_id"
})

const createTable = sequelize.sync().then(() => {
  console.log('Table rentals created successfully!');
}).catch((error) => {
  console.error('Unable to create the tables : ', error);
}); 

module.exports = {rentals}
