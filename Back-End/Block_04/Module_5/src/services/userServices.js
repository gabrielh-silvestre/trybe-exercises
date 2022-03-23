const isDefined = (...values) => values.every((v) => v !== undefined);
const isMoreThenMinLength = (string, minLength) => string.length >= minLength;
const isLessThenMaxLength = (string, maxLength) => string.length <= maxLength;
const haveFormat = (string, regexFormat) => regexFormat.test(string);

const isUsernameValid = (username) => {
  const MIN_USERNAME_LENGTH = 3;

  return isMoreThenMinLength(username, MIN_USERNAME_LENGTH);
};

const isPasswordValid = (password) => {
  const MIN_PASSWORD_LENGTH = 4;
  const MAX_PASSWORD_LENGTH = 8;

  return (
    isMoreThenMinLength(password, MIN_PASSWORD_LENGTH) &&
    isLessThenMaxLength(password, MAX_PASSWORD_LENGTH)
  );
};

const isEmailValid = (email) => {
  const EMAIL_REGEX = new RegExp(
    /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    'gm'
  );

  return haveFormat(email, EMAIL_REGEX);
};

const validRegister = ({ username, email, password }) => {
  const FAIL_STATUS = 400;
  const SUCCES_STATUS = 201;

  switch (false) {
    case isDefined(username, email, password):
      return { status: FAIL_STATUS, message: 'Invalid data' };
    case isUsernameValid(username):
      return { status: FAIL_STATUS, message: 'Invalid username' };
    case isPasswordValid(password):
      return { status: FAIL_STATUS, message: 'Invalid password' };
    case isEmailValid(email):
      return { status: FAIL_STATUS, message: 'Invalid email' };
    default:
      return { status: SUCCES_STATUS, message: 'User created' };
  }
};

const validLogin = ({ email, password }) => {
  const FAIL_STATUS = 400;
  const SUCCES_STATUS = 200;

  switch (false) {
    case email || password:
      return { status: FAIL_STATUS, message: 'Invalid email and passsword' };
    case isEmailValid(email):
      return { status: FAIL_STATUS, message: 'Invalid email' };
    case isPasswordValid(password):
      return { status: FAIL_STATUS, message: 'Invalid passsword' };
    default:
      return { status: SUCCES_STATUS, token: '86567349784e' };
  }
};

module.exports = {
  validRegister,
  validLogin,
};
