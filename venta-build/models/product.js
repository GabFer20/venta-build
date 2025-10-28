const { DataTypes, Model } = require('sequelize');

class Product extends Model {
  static initModel(sequelize) {
    Product.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      sku: { type: DataTypes.STRING, allowNull: true },
      price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      stock: { type: DataTypes.INTEGER, defaultValue: 0 }
    }, { sequelize, modelName: 'product' });
  }
}

module.exports = Product;