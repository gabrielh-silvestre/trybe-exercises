const express = require('express');

const {
  createUserController,
} = require('../modules/users/useCases/createUser/createUserController');

const userRoute = express.Router();

userRoute.post('/', createUserController);

module.exports = { userRoute };
