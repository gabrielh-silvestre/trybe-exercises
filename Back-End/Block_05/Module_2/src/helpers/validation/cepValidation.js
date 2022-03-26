const cepModel = require('../../modules/cep/model/cepModel');
const { haveFormat, isDefinied } = require('./genericValidations');

const CEP_FORMAT = new RegExp(/\d{5}-?\d{3}/);

const isAddressValid = async ({ cep, logradouro, bairro, localidade, uf }) => {
  if (!isDefinied(cep, logradouro, bairro, localidade, uf)) {
    throw new Error('Todos os campos são obrigatórios');
  }
};

const isCepValid = (cep) => {
  if (!isDefinied(cep)) {
    throw new Error('CEP é obrigatório');
  }

  if (!haveFormat(CEP_FORMAT, cep)) {
    throw new Error('CEP inválido');
  }
};

const cepAlreadyExists = async (cep) => {
  const findedCep = await cepModel.findOne(cep);

  if (findedCep) {
    throw new Error('CEP já cadastrado');
  }
};

module.exports = {
  isAddressValid,
  isCepValid,
  cepAlreadyExists,
};
