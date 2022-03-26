const { cepModel } = require('../../model/cepModel');

const getCepUseCase = async (cep) => {
  const [findedCep] = await cepModel.findOne(cep);

  if (!findedCep) {
    throw new Error('CEP não encontrado');
  }

  return findedCep;
};

module.exports = {
  getCepUseCase,
};
