const { createCepUseCase } = require('./createCepUseCase');

const createCepController = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const newCep = { cep, logradouro, bairro, localidade, uf };

  try {
    const { code, message } = await createCepUseCase(newCep);

    if (code) return next({ code, message });

    return res.status(201).json(newCep);
  } catch (err) {
    return next({ code: 'internalError', message: err.message });
  }
};

module.exports = { createCepController };
