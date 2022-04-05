const validUsername = (req, res, next) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: 'Missing username' });
  }

  if (username.length < 5) {
    return res
      .status(400)
      .json({ error: 'Username must be at least 5 characters long' });
  }

  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'Missing password' });
  }

  if (password.length < 5) {
    return res
      .status(400)
      .json({ error: 'Password must be at least 5 characters long' });
  }

  next();
};

const validAdmin = (req, _res, next) => {
  const { username, password } = req.body;
  req.body.isAdmin = false;

  if (username === 'admin' && password === 's3nh4S3gur4???') {
    req.body.isAdmin = true;
  }

  next();
};

module.exports = {
  validUsername,
  validPassword,
  validAdmin,
};
