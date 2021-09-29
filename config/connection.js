const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('deep-blue', 'root', '186173Bk', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;