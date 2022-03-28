const express = require('express');
const { productModel } = require('../models/productModel');

const productRouter = express.Router();

productRouter.get('/', async (req, res, next) => {
  const products = await productModel.getAll();

  res.send(products);
});

productRouter.get('/:id', async (req, res, next) => {
  const product = await productModel.getById(req.params.id);

  res.send(product);
});

productRouter.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await productModel.add(name, brand);

  res.send(newProduct);
});

productRouter.post('/delete/:id', async (req, res) => {
  const products = await productModel.exclude(req.params.id);

  res.send(products);
});

productRouter.post('/update/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await productModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = {
  productRouter,
};
