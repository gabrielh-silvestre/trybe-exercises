const express = require('express');
const { UserController } = require('../controllers/user');

const { validateUserLogin } = require('../middlewares/validators');

const router = express.Router();

router.post('/', validateUserLogin, UserController.login);

module.exports = {
  loginRouter: router,
};
