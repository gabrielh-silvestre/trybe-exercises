const { getCepUseCase } = require('./getCepUseCase');

const getCepController = async (req, res, next) => {
  const { cep } = req.params;

  try {
    const { code, message, findedCep } = await getCepUseCase(cep);

    if (code) return next({ code, message });

    return res.status(200).json(findedCep);
  } catch (err) {
    return next({ code: 'internalError', message: err.message });
  }
};

module.exports = {
  getCepController,
};
