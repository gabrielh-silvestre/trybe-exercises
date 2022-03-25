const { userRepository } = require('../../repository/userRepository');

const updateUserUseCase = async ({
  id,
  firstName,
  lastName,
  email,
  password,
}) => {
  const userToUpdate = { id, firstName, lastName, email, password };

  const user = await userRepository.findById(id);
  if (user.length === 0) {
    throw new Error('User not found');
  }

  await userRepository.update(userToUpdate);
  return { code: 200, data: userToUpdate };
};

module.exports = { updateUserUseCase };
