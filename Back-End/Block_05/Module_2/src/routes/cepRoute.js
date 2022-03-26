const express = require('express');

const {
  validCep,
  uniqueCep,
} = require('../middleware/validationHandles/cepHandleValidations');

const {
  createCepController,
} = require('../modules/cep/useCases/createCep/createCepController');
const {
  getCepController,
} = require('../modules/cep/useCases/getCep/getCepController');

const cepRouter = express.Router();

cepRouter.get('/:cep', validCep, getCepController);
cepRouter.post('/', validCep, uniqueCep, createCepController);

module.exports = {
  cepRouter,
};
