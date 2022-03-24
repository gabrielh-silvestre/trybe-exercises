const { findUserByIdUseCase } = require('./findUserByIdUseCase');

const findUserByIdController = async (req, res) => {
  const { id } = req.params;

  const { code, message, data } = await findUserByIdUseCase(id);

  if (message) {
    return res.status(code).json({ message });
  }

  return res.status(code).json(data);
};

module.exports = { findUserByIdController };
