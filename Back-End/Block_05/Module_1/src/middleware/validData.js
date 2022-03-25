const {
  isDefinied,
  isMoreThenMinLength,
} = require('../helpers/genericValidators');

const validateUserData = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!isDefinied(firstName, lastName, email, password)) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!isMoreThenMinLength(6, password)) {
    return res
      .status(400)
      .json({ message: 'Password must be at least 6 characters' });
  }

  next();
};

module.exports = { validateUserData };
