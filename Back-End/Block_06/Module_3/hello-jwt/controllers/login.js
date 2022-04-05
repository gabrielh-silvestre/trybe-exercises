require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '1h',
};

const singUp = (req, res) => {
  const { username, password, isAdmin } = req.body;
  const user = {
    username,
    password,
    admin: isAdmin,
  };

  jwt.sign({ user }, secret, jwtConfig, (err, token) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ token });
  });
};

module.exports = {
  singUp,
};
