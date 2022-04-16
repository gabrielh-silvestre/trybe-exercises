const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../../config/jwtConfig');

const createToken = (id) => {
  const token = jwt.sign({ data: id }, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
    algorithm: jwtConfig.algorithm,
  });
  return token;
};

const validToken = (token) => {
  try {
    const isValid = jwt.verify(token, jwtConfig.secret);
    return isValid;
  } catch (err) {
    return null;
  }
};

module.exports = {
  createToken,
  validToken,
};
