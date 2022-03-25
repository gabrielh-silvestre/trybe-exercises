const { createUserUseCase } = require('./createUserUseCase');

const createUserController = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = { firstName, lastName, email, password };

  try {
    const { code, data } = await createUserUseCase(newUser);
    return res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { createUserController };
