const { validRegister, validLogin } = require('../services/userServices');

const registerUser = (req, res) => {
  const { username, email, password } = req.body;
  const { status, message } = validRegister({ username, email, password });

  return res.status(status).json({ message });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  const { status, message, token } = validLogin({ email, password });

  return res.status(status).json(message ? { message } : { token });
};

module.exports = {
  registerUser,
  loginUser,
};
