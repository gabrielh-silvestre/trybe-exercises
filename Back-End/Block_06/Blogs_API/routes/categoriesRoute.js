const express = require('express');

const { CategoryController } = require('../controllers/category');
const { authUser } = require('../middlewares/auth');
const {
  validateAuthorization,
  validateCategoryCreation,
} = require('../middlewares/validators');

const router = express.Router();

router.use(validateAuthorization, authUser);

router.post('/', validateCategoryCreation, CategoryController.create);

router.get('/', CategoryController.findAll);

module.exports = {
  categoriesRouter: router,
};
