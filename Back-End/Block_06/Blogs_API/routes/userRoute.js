const express = require('express');

const { UserController } = require('../controllers/user');
const { authUser } = require('../middlewares/auth');
const {
  validateUserCreation,
  validateUniqueUser,
  validateAuthorization,
} = require('../middlewares/validators');

const router = express.Router();

router.post(
  '/',
  validateUserCreation,
  validateUniqueUser,
  UserController.create,
);

router.use(validateAuthorization, authUser);

router.delete('/me', UserController.destroy);

router.get('/:id', UserController.findById);
router.get('/', UserController.findAll);

module.exports = {
  userRouter: router,
};
