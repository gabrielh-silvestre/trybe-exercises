const express = require('express');

const { validCep } = require('../middleware/validationHandles/cepHandleValidations');
const {
  getCepController,
} = require('../modules/cep/useCases/getCep/getCepController');

const cepRouter = express.Router();

cepRouter.get('/:cep', validCep, getCepController);

module.exports = {
  cepRouter,
};
