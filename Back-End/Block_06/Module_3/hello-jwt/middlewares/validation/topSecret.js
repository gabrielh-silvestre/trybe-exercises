const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validAuthorization = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Missing authorization' });
  }

  req.body.token = authorization;
  next();
};

const validAdmin = (req, res, next) => {
  const { token } = req.body;

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ error: 'Token not found' });
    }

    const { user: { admin } } = decoded;
    if (!admin) {
      return res.status(403).json({ error: 'Restricted acces' });
    }

    next();
  });
};

module.exports = {
  validAuthorization,
  validAdmin,
};
