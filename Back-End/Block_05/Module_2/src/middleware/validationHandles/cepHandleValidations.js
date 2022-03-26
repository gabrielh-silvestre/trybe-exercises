const {
  isCepValid,
  cepAlreadyExists,
  isAddressValid,
} = require('../../helpers/validation/cepValidation');

const validCep = (req, _res, next) => {
  const { cep } = req.params;

  try {
    isCepValid(cep);
    next();
  } catch (err) {
    next({ code: 'invalidData', message: err.message });
  }
};

const validateNewCep = async (req, _res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const newAddress = { cep, logradouro, bairro, localidade, uf };

  try {
    cepAlreadyExists(cep);
    isAddressValid(newAddress);
    next();
  } catch (err) {
    next({ code: 'invalidData', message: err.message });
  }
};

module.exports = {
  validCep,
  validateNewCep,
};
