// destructing sequelize model and datatypes

const { Model, DataTypes } = require('sequelize');

// importing config file to make connection with datbase
const sequelize = require('../config/connection.js');

// definining the model for Tag
class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    tag_name: {
      type: DataTypes.STRING,
     
    }, 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
