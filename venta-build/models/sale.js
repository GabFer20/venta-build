const { DataTypes, Model } = require('sequelize');

class Sale extends Model {
  static initModel(sequelize) {
    Sale.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      date: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      total: { type: DataTypes.DECIMAL(12,2), defaultValue: 0.00 },
      customerId: { type: DataTypes.INTEGER, allowNull: true }
    }, { sequelize, modelName: 'sale' });
  }
}

module.exports = Sale;