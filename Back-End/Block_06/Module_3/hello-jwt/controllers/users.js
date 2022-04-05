const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const singIn = (req, res) => {
  const { token } = req.body;
  console.log(token);

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ error: 'Token not found' });
    }
    const { user: { username, admin } } = decoded;
    return res.status(200).json({ username, admin });
  });
};

module.exports = {
  singIn,
};
