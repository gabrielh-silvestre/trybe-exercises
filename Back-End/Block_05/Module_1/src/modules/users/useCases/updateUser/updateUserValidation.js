const { isDefinied, isMoreThenMinLength } = require('../../../validations');

const updateUserIsValid = ({ firstName, lastName, email, password }) => {
  switch (false) {
    case isDefinied(firstName, lastName, email, password):
      throw new Error('All fields are required');
    case isMoreThenMinLength(6, password):
      throw new Error('Password must be at least 6 characters');
  }
};

module.exports = { updateUserIsValid };
