// destructing sequelize model and datatypes

const { Model, DataTypes } = require('sequelize');

// importing config file to make connection with datbase
const sequelize = require('../config/connection.js');

// definining the model for Category
class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    category_name: {
      type: DataTypes.STRING,
      notNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
