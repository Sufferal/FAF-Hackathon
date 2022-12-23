const Sequelize = require("sequelize");
const sequelize = require('./sequelize').sequelize

const user = sequelize.define("user", {
  user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    required: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    required: true,
    allowNull: false
  },
});


const createTable = sequelize.sync().then(() => {
  console.log('User table were created successfully!');
}).catch((error) => {
  console.error('Unable to create the tables : ', error);
}); 

module.exports = {user}
