const express = require('express');
const { listAll } = require('../services/simpsonsServices');
const simpsonsRoute = express.Router();

simpsonsRoute.get('/', async (_req, res) => {
  const allSimpsons = await listAll();

  if (allSimpsons.message) {
    return res.status(500).json({ message: allSimpsons.message });
  }

  return res.status(200).json(allSimpsons);
});

module.exports = {
  simpsonsRoute,
}
