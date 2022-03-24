const { userRepository } = require('../../repository/userRepository');
const { updateUserIsValid } = require('./updateUserValidation');

const updateUserUseCase = async ({ id, firstName, lastName, email, password }) => {
  const userToUpdate = { id, firstName, lastName, email, password };

  try {
    updateUserIsValid(userToUpdate);
  } catch (err) {
    return { code: 400, message: err.message };
  }

  const user = await userRepository.findById(id);
  if (user.length === 0) {
    return { code: 404, message: 'User not found' };
  }

  try {
    await userRepository.update(userToUpdate);
    return { code: 200, data: userToUpdate };
  } catch (err) {
    return { code: 500, message: err.message };
  }
};

module.exports = { updateUserUseCase };
