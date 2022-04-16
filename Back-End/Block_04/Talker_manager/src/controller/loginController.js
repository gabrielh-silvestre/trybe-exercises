const { validLogin } = require('../service/loginService');

const executeLogin = (req, res) => {
  const { email, password } = req.body;
  const { status, message, token } = validLogin({ email, password });

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json({ token });
};

module.exports = {
  executeLogin,
};
