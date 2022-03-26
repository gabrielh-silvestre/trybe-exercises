const { getCepUseCase } = require('./getCepUseCase');

const getCepController = async (req, res, next) => {
  const { cep } = req.params;

  try {
    const findedCep = await getCepUseCase(cep);
    return res.status(200).json(findedCep);
  } catch (err) {
    next({ code: 'notFound', message: err.message });
  }
};

module.exports = {
  getCepController,
};
