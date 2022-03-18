const express = require('express');

const { getCurrency } = require('../controllers/btcController');

const btcRouter = express.Router();

btcRouter.get('/price', getCurrency);

module.exports = {
  btcRouter,
};
