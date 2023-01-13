const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entry extends Model {}

Entry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            auto_increment: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        entry: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'category',
                key: 'id',
            },
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
