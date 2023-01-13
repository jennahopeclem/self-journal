const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            auto_increment: true,
        }, 
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        entry_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'entry',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'entry',
    }
);

module.exports = Category;
