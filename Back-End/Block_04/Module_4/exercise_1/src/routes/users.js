const express = require('express');
const usersRoute = express.Router();

usersRoute.put('/:name/:age', (req, res) => {
  const { name, age } = req.params;

  return res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

module.exports = {
  usersRoute,
};
