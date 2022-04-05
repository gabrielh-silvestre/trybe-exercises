const express = require('express');
const { singUp } = require('../controllers/login');
const {
  validUsername,
  validPassword,
  validAdmin,
} = require('../middlewares/validation/loginValidations');

const loginRouter = express.Router();

loginRouter.post('/', validUsername, validPassword, validAdmin, singUp);

module.exports = {
  loginRouter,
};
