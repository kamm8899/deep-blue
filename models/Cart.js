const { Model, DataTypes } = require('sequelize');
const  {Product, User}  = require('.');

const sequelize = require('../config/connection');


class Cart extends Model {}

Cart.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id:{
      type: DataTypes.INTEGER,
      references:{
        model: Product,
        key: 'id'
      },
      user_id:{
        type: DataTypes.INTEGER,
        references:{
          model: User,
          key: 'id'
        }
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart',
  }
);

module.exports = Cart;

