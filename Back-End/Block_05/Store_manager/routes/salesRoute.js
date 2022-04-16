const express = require('express');
const { SalesController } = require('../controllers/salesControllers');
const { validProductId, validQuantity } = require('../middlewares/sales');

const salesRouter = express.Router();

salesRouter.get('/:id', SalesController.findById);
salesRouter.get('/', SalesController.findAll);

salesRouter.post('/', validProductId, validQuantity, SalesController.create);

salesRouter.put('/:id', validProductId, validQuantity, SalesController.update);

salesRouter.delete('/:id', SalesController.remove);

module.exports = {
  salesRouter,
};
