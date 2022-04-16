const crypto = require('crypto');
const { logInUser } = require('../model/loginModel');
const {
  isDefinied,
  isNotEmpty,
  isMoreThenMinLength,
  haveFormat,
} = require('./genericService');

const generateToken = () => crypto.randomBytes(8).toString('hex');

const isEmailValid = (email) => {
  const EMAIL_REGEX = new RegExp(
    /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    'gm',
  );

  switch (false) {
    case isDefinied(email):
      return { message: 'O campo "email" é obrigatório' };
    case isNotEmpty(email):
      return { message: 'O campo "email" é obrigatório' };
    case haveFormat(EMAIL_REGEX, email):
      return { message: 'O "email" deve ter o formato "email@email.com"' };
    default:
      return { message: null };
  }
};

const isPasswordValid = (password) => {
  const MIN_PASSWORD_LENGTH = 6;

  switch (false) {
    case isDefinied(password):
      return { message: 'O campo "password" é obrigatório' };
    case isNotEmpty(password):
      return { message: 'O campo "password" é obrigatório' };
    case isMoreThenMinLength(MIN_PASSWORD_LENGTH, password):
      return { message: 'O "password" deve ter pelo menos 6 caracteres' };
    default:
      return { message: null };
  }
};

const validLogin = ({ email, password }) => {
  const FAIL_STATUS = 400;
  const SUCCES_STATUS = 200;

  const { message: passwordMessage } = isPasswordValid(password);
  const { message: emailMessage } = isEmailValid(email);

  switch (true) {
    case passwordMessage !== null:
      return { status: FAIL_STATUS, message: passwordMessage };
    case emailMessage !== null:
      return { status: FAIL_STATUS, message: emailMessage };
    default: {
      const token = generateToken();
      logInUser(token);
      return { status: SUCCES_STATUS, token };
    }
  }
};

module.exports = {
  validLogin,
};
