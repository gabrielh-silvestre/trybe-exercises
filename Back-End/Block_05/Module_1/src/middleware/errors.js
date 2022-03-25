const rescueUserAlreadyExists = (err, _req, res, next) => {
  if (err.message === 'Email already in use') {
    return res.status(400).json({ message: err.message });
  }

  next(err);
};

const rescueUserNotFount = (err, _req, res, next) => {
  if (err.message === 'User not found') {
    return res.status(404).json({ message: err.message });
  }

  next(err);
};

const rescueErrors = (_err, _req, res, _next) => {
  return res.status(500).json({ message: 'Internal Error!' });
};

module.exports = {
  rescueUserAlreadyExists,
  rescueUserNotFount,
  rescueErrors,
};
