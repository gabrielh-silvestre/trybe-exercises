const { ERROR_CODES } = require('../helpers/codes');

const errorHandler = (err, _req, res, _next) => {
  const { code, message } = err;

  if (code) {
    return res.status(ERROR_CODES[code]).json({ message });
  }

  return res.status(500).end();
};

module.exports = { errorHandler };
