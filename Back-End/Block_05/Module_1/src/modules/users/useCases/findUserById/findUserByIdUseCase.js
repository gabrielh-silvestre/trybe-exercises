const { userRepository } = require('../../repository/userRepository');

const findUserByIdUseCase = async (id) => {
  let user;

  try {
    user = await userRepository.findById(id);
  } catch (err) {
    return { code: 500, message: err.message };
  }

  if (user.length === 0) {
    return { code: 404, message: 'User not found' };
  }

  return { code: 200, data: user };
};

module.exports = { findUserByIdUseCase };
