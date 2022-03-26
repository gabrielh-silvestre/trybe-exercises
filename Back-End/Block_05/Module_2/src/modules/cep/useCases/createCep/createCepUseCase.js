const {
  isDefinied,
} = require('../../../../helpers/validation/genericValidations');
const { cepModel } = require('../../model/cepModel');

const createCepUseCase = async ({
  cep,
  logradouro,
  bairro,
  localidade,
  uf,
}) => {
  if (!isDefinied(cep, logradouro, bairro, localidade, uf)) {
    return { code: 'invalidData', message: 'Todos os campos são obrigatórios' };
  }

  if (!cep.match(/\d{5}-?\d{3}/)) {
    return { code: 'invalidData', message: 'CEP inválido' };
  }

  const [findedCep] = await cepModel.findOne(cep);
  if (findedCep) {
    return { code: 'conflict', message: 'CEP já cadastrado' };
  }

  const newCep = { cep, logradouro, bairro, localidade, uf };
  await cepModel.create(newCep);

  return { code: null, message: null };
};

module.exports = {
  createCepUseCase,
};
