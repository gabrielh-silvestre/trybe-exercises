const {
  isCepValid,
  cepAlreadyExists,
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

const uniqueCep = async (req, _res, next) => {
  const { cep } = req.params;

  try {
    cepAlreadyExists(cep);
  } catch (err) {
    next({ code: 'invalidData', message: err.message });
  }
};

module.exports = {
  validCep,
  uniqueCep,
};
