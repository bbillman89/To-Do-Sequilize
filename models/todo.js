// let Sequelize = require('sequelize');

// let sequelize = require('../config/config.json');

module.exports = function(sequelize, DataTypes){
let toDo = sequelize.define('toDoList',{
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
});
return toDo;
}


