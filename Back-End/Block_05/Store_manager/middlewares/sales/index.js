const { ERROR_CODES } = require('../../helpers/codes');
const {
  isDefinied,
  isMoreThenMinNumber,
} = require('../../helpers/validations');

const validProductId = (req, res, next) => {
  const newSale = req.body;
  const productIds = newSale.map(({ productId }) => productId);

  if (!isDefinied(...productIds)) {
    return res.status(ERROR_CODES.badRequest).json({
      message: '"productId" is required',
    });
  }

  next();
};

const validQuantity = (req, res, next) => {
  const newSale = req.body;
  const quantities = newSale.map(({ quantity }) => quantity);

  if (!isDefinied(...quantities)) {
    return res.status(ERROR_CODES.badRequest).json({
      message: '"quantity" is required',
    });
  }

  if (!isMoreThenMinNumber(1, ...quantities)) {
    return res.status(ERROR_CODES.unprocessable).json({
      message: '"quantity" must be greater than or equal to 1',
    });
  }

  next();
};

module.exports = {
  validProductId,
  validQuantity,
};
