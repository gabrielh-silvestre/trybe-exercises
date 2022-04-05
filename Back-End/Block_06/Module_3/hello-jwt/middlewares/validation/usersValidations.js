const validAuthorization = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Missing authorization' });
  }

  req.body.token = authorization;
  next();
};

module.exports = {
  validAuthorization,
};
