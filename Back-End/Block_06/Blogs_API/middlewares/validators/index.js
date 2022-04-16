const { User, Category, BlogPost, Sequelize } = require('../../models');

const { in: opIn } = Sequelize.Op;

const {
  createCategorySchema,
} = require('../../utils/validators/categoryValidator');
const {
  createPostSchema,
  updatePostSchema,
} = require('../../utils/validators/postValidator');

const {
  createUserSchema,
  loginUserSchema,
} = require('../../utils/validators/userValidator');

const validateUserCreation = (req, res, next) => {
  const { error } = createUserSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
};

const validateUniqueUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
};

const validateUserLogin = (req, res, next) => {
  const { error } = loginUserSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
};

const validateAuthorization = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  req.token = authorization;

  next();
};

const validateCategoryCreation = (req, res, next) => {
  const { error } = createCategorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
};

const validatePostCreation = (req, res, next) => {
  const { error } = createPostSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
};

const validateCategoryExistence = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categories = await Category.findAll({
    where: {
      id: {
        [opIn]: categoryIds, // ref: https://sequelize.org/api/v6/class/src/model.js~model#static-method-findAll
      },
    },
  });

  if (categories.length !== categoryIds.length) {
    return res.status(400).json({
      message: '"categoryIds" not found',
    });
  }

  next();
};

const validatePostUpdate = async (req, res, next) => {
  const { error } = updatePostSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  const { categoryIds } = req.body;

  if (categoryIds) {
    return res.status(400).json({
      message: 'Categories cannot be edited',
    });
  }

  next();
};

const validatePostUser = async (req, res, next) => {
  const { userId } = req;
  const { id } = req.params;

  const post = await BlogPost.findOne({
    where: {
      id,
      userId,
    },
  });

  if (!post) {
    return res.status(401).json({
      message: 'Unauthorized user',
    });
  }

  next();
};

const validatePostExistence = async (req, res, next) => {
  const { id } = req.params;

  const post = await BlogPost.findByPk(id);

  if (!post) {
    return res.status(404).json({
      message: 'Post does not exist',
    });
  }

  next();
};

module.exports = {
  validateUserCreation,
  validateUniqueUser,
  validateUserLogin,
  validateAuthorization,
  validateCategoryCreation,
  validatePostCreation,
  validateCategoryExistence,
  validatePostUpdate,
  validatePostUser,
  validatePostExistence,
};
