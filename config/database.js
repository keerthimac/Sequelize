const Sequelize = require('sequelize');

// Option 1: Passing a connection URI
module.exports = new Sequelize('codegig', 'root', null, {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


