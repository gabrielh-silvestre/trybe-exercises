const { cepModel } = require('../../model/cepModel');

const createCepUseCase = async ({
  cep,
  logradouro,
  bairro,
  localidade,
  uf,
}) => {
  const newCep = { cep, logradouro, bairro, localidade, uf };
  await cepModel.create(newCep);
};

module.exports = {
  createCepUseCase,
};
