const { createCepUseCase } = require('./createCepUseCase');

const createCepController = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const newCep = { cep, logradouro, bairro, localidade, uf };

  try {
    const createdCep = await createCepUseCase(newCep);
    return res.status(201).json(createdCep);
  } catch (err) {
    next(err);
  }
};

module.exports = { createCepController };
