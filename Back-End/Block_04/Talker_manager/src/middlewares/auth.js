const { GENERATED_TOKENS: TOKENS } = require('../model/loginModel');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  if (authorization.length < 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  const isAuthorized = TOKENS.find((t) => t === authorization);

  if (!isAuthorized) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  next();
};

module.exports = {
  auth,
};
