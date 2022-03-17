const { validData } = require('../services/userServices');

const registerUser = (req, res) => {
  const { username, email, password } = req.body;
  const { status, message } = validData({ username, email, password });

  return res.status(status).json({ message });
};

module.exports = {
  registerUser,
};
