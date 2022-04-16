const express = require('express');
const { ProductController } = require('../controllers/productsControllers');
const { validName, validQuantity } = require('../middlewares/product');

const productRouter = express.Router();

productRouter.get('/:id', ProductController.findById);
productRouter.get('/', ProductController.findAll);

productRouter.post('/', validName, validQuantity, ProductController.create);

productRouter.put('/:id', validName, validQuantity, ProductController.update);

productRouter.delete('/:id', ProductController.remove);

module.exports = {
  productRouter,
};
