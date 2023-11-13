const {Sequelize}= require('sequelize');
 
var dataBase = 'crucerobd';
var userName = 'postgres';
var password = 'barcelona2002';

const connection = new Sequelize(dataBase, userName, password, {

    host: 'localhost',
    dialect: 'postgres'

});

module.exports = connection;