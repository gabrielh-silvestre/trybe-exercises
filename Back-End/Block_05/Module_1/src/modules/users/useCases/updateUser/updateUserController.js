const { updateUserUseCase } = require('./updateUserUseCase');

const updateUserController = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const userToUpdate = { id, firstName, lastName, email, password };

  try {
    const { code, data } = await updateUserUseCase(userToUpdate);
    return res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { updateUserController };
