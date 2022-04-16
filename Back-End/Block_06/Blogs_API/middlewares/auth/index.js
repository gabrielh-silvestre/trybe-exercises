const { validToken } = require('../../utils/auth');

const authUser = (req, res, next) => {
  const { token } = req;

  const decoded = validToken(token);

  if (!decoded) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }

  req.userId = decoded.data;

  next();
};

module.exports = {
  authUser,
};
