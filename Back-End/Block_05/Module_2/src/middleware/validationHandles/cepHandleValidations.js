const { isCepValid } = require('../../helpers/validation/cepValidation');

const validCep = (req, _res, next) => {
  const { cep } = req.params;

  try {
    isCepValid(cep);
    next();
  } catch (err) {
    next({ code: 'invalidData', message: err.message });
  }
};

module.exports = {
  validCep,
};
