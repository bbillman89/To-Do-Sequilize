// let Sequelize = require('sequelize');

// let sequelize = require('../config/config.json');

module.exports = function(sequelize, DataTypes){
let toDo = sequelize.define('toDo',{
    text: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        },
    },
    complete: DataTypes.BOOLEAN
});
return toDo;
}


