const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/database')

class User extends Model { }


User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User'
})



module.exports = User;