const { ERROR_CODES } = require('../../helpers/codes');
const {
  isDefinied,
  isMoreThenMinLength,
  isMoreThenMinNumber,
} = require('../../helpers/validations');

const validName = (req, res, next) => {
  const { name } = req.body;

  if (!isDefinied(name)) {
    return res.status(ERROR_CODES.badRequest).json({
      message: '"name" is required',
    });
  }

  if (!isMoreThenMinLength(5, name)) {
    return res.status(ERROR_CODES.unprocessable).json({
      message: '"name" length must be at least 5 characters long',
    });
  }

  next();
};

const validQuantity = (req, res, next) => {
  const { quantity } = req.body;

  if (!isDefinied(quantity)) {
    return res.status(ERROR_CODES.badRequest).json({
      message: '"quantity" is required',
    });
  }

  if (!isMoreThenMinNumber(1, quantity)) {
    return res.status(ERROR_CODES.unprocessable).json({
      message: '"quantity" must be greater than or equal to 1',
    });
  }

  next();
};

module.exports = {
  validName,
  validQuantity,
};
