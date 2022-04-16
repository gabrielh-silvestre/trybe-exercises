const SUCCESS_CODES = {
  success: 200,
  successInsert: 201,
  successDelete: 204,
};

const ERROR_CODES = {
  badRequest: 400,
  notFound: 404,
  conflict: 409,
  unprocessable: 422,
  internalError: 500,
};

module.exports = {
  SUCCESS_CODES,
  ERROR_CODES,
};
