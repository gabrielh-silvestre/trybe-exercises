const Joi = require('joi');

const PASSWORD_MIN_LENGTH = 6;
const DISPLAY_NAME_MIN_LENGTH = 8;

const createUserSchema = Joi.object({
  displayName: Joi.string().min(DISPLAY_NAME_MIN_LENGTH).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(PASSWORD_MIN_LENGTH).required(),
  image: Joi.string().uri().required(),
});

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  createUserSchema,
  loginUserSchema,
};
