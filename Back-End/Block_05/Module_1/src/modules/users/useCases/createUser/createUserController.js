const { createUserUseCase } = require('./createUserUseCase');

const createUserController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = { firstName, lastName, email, password };

  const createdUser = await createUserUseCase(newUser);

  return res.status(201).json(createdUser);
};

module.exports = { createUserController };
