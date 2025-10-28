const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const productsRoutes = require('./routes/products');

const app = express();
app.use(bodyParser.json());

app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
  await sequelize.sync();
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})();