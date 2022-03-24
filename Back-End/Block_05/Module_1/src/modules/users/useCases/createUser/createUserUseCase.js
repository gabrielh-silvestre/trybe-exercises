const { userRepository } = require('../../repository/userRepository');
const { createUserIsValid } = require('./createUserValidation');

const createUserUseCase = async ({ firstName, lastName, email, password }) => {
  const newUser = { firstName, lastName, email, password };

  try {
    createUserIsValid(newUser);
  } catch (err) {
    return { code: 400, message: err.message };
  }

  const userExists = await userRepository.findByEmail(email);
  if (userExists.length > 0) {
    return { code: 400, message: 'Email is already in use' };
  }

  try {
    const createdUser = await userRepository.create(newUser);
    return { code: 201, data: createdUser };
  } catch (err) {
    return { code: 500, message: err.message };
  }
};

module.exports = { createUserUseCase };
