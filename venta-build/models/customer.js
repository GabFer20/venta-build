const { DataTypes, Model } = require('sequelize');

class Customer extends Model {
  static initModel(sequelize) {
    Customer.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: true },
      phone: { type: DataTypes.STRING, allowNull: true }
    }, { sequelize, modelName: 'customer' });
  }
}

module.exports = Customer;