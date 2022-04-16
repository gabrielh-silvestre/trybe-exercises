const express = require('express');

const { executeLogin } = require('../controller/loginController');

const loginRoute = express.Router();

loginRoute.post('/', executeLogin);

module.exports = {
  loginRoute,
};
