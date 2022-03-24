const express = require('express');

const {
  createUserController,
} = require('../modules/users/useCases/createUser/createUserController');
const {
  findAllUsersController,
} = require('../modules/users/useCases/findAllUsers/findAllUsersController');
const {
  findUserByIdController,
} = require('../modules/users/useCases/findUserById/findUserByIdController');
const {
  updateUserController,
} = require('../modules/users/useCases/updateUser/updateUserController');

const userRoute = express.Router();

userRoute.post('/', createUserController);
userRoute.put('/:id', updateUserController);
userRoute.get('/:id', findUserByIdController);
userRoute.get('/', findAllUsersController);

module.exports = { userRoute };
