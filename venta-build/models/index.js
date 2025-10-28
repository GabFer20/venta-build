const sequelize = require('../config/database');
const Product = require('./product');
const Customer = require('./customer');
const Sale = require('./sale');
const SaleItem = require('./saleItem');

Product.initModel(sequelize);
Customer.initModel(sequelize);
Sale.initModel(sequelize);
SaleItem.initModel(sequelize);

Customer.hasMany(Sale, { foreignKey: 'customerId', as: 'sales' });
Sale.belongsTo(Customer, { foreignKey: 'customerId', as: 'customer' });

Sale.hasMany(SaleItem, { foreignKey: 'saleId', as: 'items', onDelete: 'CASCADE' });
SaleItem.belongsTo(Sale, { foreignKey: 'saleId' });

Product.hasMany(SaleItem, { foreignKey: 'productId', as: 'saleItems' });
SaleItem.belongsTo(Product, { foreignKey: 'productId', as: 'product' });

module.exports = { sequelize, Product, Customer, Sale, SaleItem };