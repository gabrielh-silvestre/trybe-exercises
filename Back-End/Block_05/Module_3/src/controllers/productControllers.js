const express = require('express');
const { productModel } = require('../models/productModel');

const productRouter = express.Router();

productRouter.get('/', async (req, res, next) => {
  const products = await productModel.getAll();

  res.status(200).send(products);
});

productRouter.get('/:id', async (req, res, next) => {
  const product = await productModel.getById(req.params.id);

  res.status(200).send(product);
});

productRouter.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await productModel.add(name, brand);

  res.status(201).send(newProduct);
});

productRouter.delete('/delete/:id', async (req, res) => {
  const products = await productModel.exclude(req.params.id);

  res.status(200).send(products);
});

productRouter.put('/update/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await productModel.update(req.params.id, name, brand);

  res.status(200).send(products);
});

module.exports = {
  productRouter,
};
