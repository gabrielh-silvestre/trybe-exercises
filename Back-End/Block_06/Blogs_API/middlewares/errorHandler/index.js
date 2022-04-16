const errorHandler = (err, _req, res, _next) => {
  const { statusCode, message } = err;

  if (statusCode) {
    return res.status(statusCode).json({
      message,
    });
  }

  console.log(err);
  return res.status(500).json({
    message: 'Internal server error',
  });
};

module.exports = {
  errorHandler,
};
