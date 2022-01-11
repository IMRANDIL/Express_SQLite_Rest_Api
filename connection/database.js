const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('test-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './db/db.sqlite3'
});



module.exports = sequelize;