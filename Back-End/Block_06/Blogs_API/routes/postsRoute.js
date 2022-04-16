const express = require('express');

const { PostController } = require('../controllers/post');
const { authUser } = require('../middlewares/auth');
const {
  validateAuthorization,
  validatePostCreation,
  validateCategoryExistence,
  validatePostUpdate,
  validatePostUser,
  validatePostExistence,
} = require('../middlewares/validators');

const router = express.Router();

router.use(validateAuthorization, authUser);

router.post(
  '/',
  validatePostCreation,
  validateCategoryExistence,
  PostController.create,
);

router.put('/:id', validatePostUpdate, validatePostUser, PostController.update);

router.delete(
  '/:id',
  validatePostExistence,
  validatePostUser,
  PostController.destroy,
);

router.get('/search', PostController.findByTerm);
router.get('/:id', PostController.findById);
router.get('/', PostController.findAll);

module.exports = {
  postRouter: router,
};
