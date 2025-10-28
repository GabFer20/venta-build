const { DataTypes, Model } = require('sequelize');

class SaleItem extends Model {
  static initModel(sequelize) {
    SaleItem.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      saleId: { type: DataTypes.INTEGER, allowNull: false },
      productId: { type: DataTypes.INTEGER, allowNull: false },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      unitPrice: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      lineTotal: { type: DataTypes.DECIMAL(12,2), allowNull: false }
    }, { sequelize, modelName: 'saleItem' });
  }
}

module.exports = SaleItem;