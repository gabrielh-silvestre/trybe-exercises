const { updateUserUseCase } = require('./updateUserUseCase');

const updateUserController = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const userToUpdate = { id, firstName, lastName, email, password };

  const { code, message, data } = await updateUserUseCase(userToUpdate);

  if (message) {
    return res.status(code).json({ message });
  }

  return res.status(code).json(data);
};

module.exports = { updateUserController };
