const { userRepository } = require('../../repository/userRepository');

const createUserUseCase = async ({ firstName, lastName, email, password }) => {
  const newUser = { firstName, lastName, email, password };
  const createdUser = await userRepository.create(newUser);

  return createdUser;
};

module.exports = { createUserUseCase };
