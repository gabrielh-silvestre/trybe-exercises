const { findAllUsersUseCase } = require('./findAllUsersUseCase');

const findAllUsersController = async (_req, res) => {
  const { code, message, data } = await findAllUsersUseCase();

  if (message) {
    return res.status(code).json({ message });
  }

  return res.status(code).json(data);
};

module.exports = { findAllUsersController };
