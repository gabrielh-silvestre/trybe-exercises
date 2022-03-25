const { userRepository } = require('../../repository/userRepository');

const createUserUseCase = async ({ firstName, lastName, email, password }) => {
  const newUser = { firstName, lastName, email, password };

  const userExists = await userRepository.findByEmail(email);
  if (userExists.length > 0) {
    throw new Error('Email already in use');
  }

  const createdUser = await userRepository.create(newUser);
  return { code: 201, data: createdUser };
};

module.exports = { createUserUseCase };
