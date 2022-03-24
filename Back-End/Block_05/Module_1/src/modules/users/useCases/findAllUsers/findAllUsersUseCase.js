const { userRepository } = require('../../repository/userRepository');

const findAllUsersUseCase = async () => {
  try {
    const users = await userRepository.findAll();
    return { code: 200, data: users };
  } catch (err) {
    return { code: 500, message: err.message };
  }
};

module.exports = { findAllUsersUseCase };
