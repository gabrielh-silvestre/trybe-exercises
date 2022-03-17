const TOKEN = '86567349784e';

const isString = (value) => typeof value === 'string';

const validToken = (token) => {
  const ERROR_MESSAGE = 'Invalid token';
  const FAIL_STATUS = 401;
  const SUCCESS_STATUS = 200;

  switch (false) {
    case isString(token):
      return { status: FAIL_STATUS, message: ERROR_MESSAGE };
    case token === TOKEN:
      return { status: FAIL_STATUS, message: ERROR_MESSAGE };
    default:
      return { status: SUCCESS_STATUS };
  }
};

module.exports = {
  validToken,
};
