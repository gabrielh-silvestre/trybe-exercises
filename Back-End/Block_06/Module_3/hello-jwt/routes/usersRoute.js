const express = require('express');

const { singIn } = require('../controllers/users');
const {
  validAuthorization,
} = require('../middlewares/validation/usersValidations');

const userRouter = express.Router();

userRouter.get('/me', validAuthorization, singIn);

module.exports = {
  userRouter,
};
