const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entry extends Model { }

Entry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
       name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
<<<<<<< HEAD
            allowNull: false,
=======
            allowNull: false
>>>>>>> 403b35da0f45bc636e4e09eb6ca4c1083f57bee4
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        checkbox: {
            type: DataTypes.BOOLEAN,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'entry',
    }
);

module.exports = Entry;
