const handleIternalError = (err, _req, res, next) => {
  return res.status(500).json({ message: err.message });
};

const handleInvalidData = (err, _req, res, next) => {
  if (err.code === 'invalidData') {
    return res.status(400).json({ message: err.message });
  }

  next(err);
};

const handleNotFound = (err, _req, res, next) => {
  if (err.code === 'notFound') {
    return res.status(404).json({ message: err.message });
  }

  next(err);
};

module.exports = {
  handleIternalError,
  handleInvalidData,
  handleNotFound,
};
