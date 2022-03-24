const { createUserUseCase } = require('./createUserUseCase');

const createUserController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = { firstName, lastName, email, password };

  const { code, message, data } = await createUserUseCase(newUser);

  if (message) {
    return res.status(code).json({ message });
  }

  return res.status(code).json(data);
};

module.exports = { createUserController };
