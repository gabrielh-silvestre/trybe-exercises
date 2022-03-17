const crypto = require('crypto');

const code = 400;

const isValid = (value) => typeof value !== 'undefined' && value !== '';

const singUpUser = ({ email, password, firstName, phone }) => {
  switch (false) {
    case isValid(email):
      return { code, message: 'Invalid email' };
    case isValid(password):
      return { code, message: 'Invalid password' };
    case isValid(firstName):
      return { code, message: 'Invalid first name' };
    case isValid(phone):
      return { code, message: 'Invalid phone' };
    default:
      return { code: 201, token: crypto.randomBytes(8).toString('hex') };
  }
};

module.exports = {
  singUpUser,
};
