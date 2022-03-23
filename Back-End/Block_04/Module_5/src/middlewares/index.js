const { validToken } = require('../services/authServices');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  const { status, message } = validToken(authorization);

  if (message) {
    return res.status(status).json({ message });
  }

  next();
};

module.exports = {
  auth,
};
