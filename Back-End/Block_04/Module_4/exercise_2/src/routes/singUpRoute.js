const express = require('express');
const { singUpUser } = require('../services/singUpService');
const singUpRoute = express.Router();

singUpRoute.post('/', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  const { code, message, token } = singUpUser({
    email,
    password,
    firstName,
    phone,
  });

  if (message) {
    return res.status(code).json({ message });
  }

  return res.status(code).json({ token });
});

module.exports = {
  singUpRoute,
}
