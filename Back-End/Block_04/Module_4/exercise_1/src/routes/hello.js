const express = require('express');
const helloRoute = express.Router();

helloRoute.post('/', (req, res) => {
  const { name } = req.body;

  return res.status(200).json({ message: `Hello ${name}!` });
});

module.exports = {
  helloRoute,
};
