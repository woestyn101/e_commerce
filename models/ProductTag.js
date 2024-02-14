// destructing sequelize model and datatypes

const { Model, DataTypes } = require('sequelize');

// importing config file to make connection with datbase
const sequelize = require('../config/connection');

// definining the model for ProductTag
class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `product` model, which we set in `Product.js` as its `modelName` property
        model: 'product',
        key: 'id',
      },
     
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `tag` model, which we set in `Tag.js` as its `modelName` property
        model: 'tag',
        key: 'id',
      },
     
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
