require('dotenv').config();

const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = {
  jwtConfig,
};
