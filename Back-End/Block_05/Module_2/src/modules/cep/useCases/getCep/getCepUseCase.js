const { cepModel } = require('../../model/cepModel');
const {
  haveFormat,
} = require('../../../../helpers/validation/genericValidations');

const CEP_FORMAT = new RegExp(/\d{5}-?\d{3}/);

const getCepUseCase = async (cep) => {
  if (!haveFormat(CEP_FORMAT, cep)) {
    return { code: 'invalidData', message: 'CEP inválido' };
  }

  const [findedCep] = await cepModel.findOne(cep);

  if (!findedCep) {
    return { code: 'notFound', message: 'CEP não encontrado' };
  }

  return { findedCep };
};

module.exports = {
  getCepUseCase,
};
