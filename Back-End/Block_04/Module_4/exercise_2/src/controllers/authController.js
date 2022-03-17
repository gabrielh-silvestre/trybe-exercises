const FAKE_TOKEN =
  'N1RGTYhBZ5JbuaKuXVd3h2P1kc64dRZkVOlg7RodICNyI6VzUtu0vxfa5J6W';

const validateToken = (req, res, next) => {
  const { token } = req.body;

  if (token === FAKE_TOKEN) {
    next();
  } else {
    return res.status(498).json({ message: 'Invalid token' });
  }
};

module.exports = {
  validateToken,
};
