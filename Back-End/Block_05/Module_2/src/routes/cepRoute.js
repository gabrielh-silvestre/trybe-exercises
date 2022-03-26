const express = require('express');

const {
  createCepController,
} = require('../modules/cep/useCases/createCep/createCepController');
const {
  getCepController,
} = require('../modules/cep/useCases/getCep/getCepController');

const cepRouter = express.Router();

cepRouter.get('/:cep', getCepController);
cepRouter.post('/', createCepController);

module.exports = {
  cepRouter,
};
