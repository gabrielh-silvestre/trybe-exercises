const express = require('express');
const pingRoute = express.Router();

pingRoute.get('/', (_req, res) => {
  return res.status(200).json({ message: 'pong' });
});

module.exports = {
  pingRoute,
}
