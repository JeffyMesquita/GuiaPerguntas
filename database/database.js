const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'je42177891', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
