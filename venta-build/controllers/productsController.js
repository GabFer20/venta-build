const { Product } = require('../models');

module.exports = {
  async list(req, res) {
    const products = await Product.findAll();
    res.json(products);
  },
  async get(req, res) {
    const p = await Product.findByPk(req.params.id);
    if (!p) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(p);
  },
  async create(req, res) {
    const { name, sku, price, stock } = req.body;
    const product = await Product.create({ name, sku, price, stock });
    res.status(201).json(product);
  },
  async update(req, res) {
    const p = await Product.findByPk(req.params.id);
    if (!p) return res.status(404).json({ error: 'Producto no encontrado' });
    await p.update(req.body);
    res.json(p);
  },
  async remove(req, res) {
    const p = await Product.findByPk(req.params.id);
    if (!p) return res.status(404).json({ error: 'Producto no encontrado' });
    await p.destroy();
    res.json({ ok: true });
  }
};