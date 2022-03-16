const express = require('express');
const { listAll, findOne } = require('../services/simpsonsServices');

const simpsonsRoute = express.Router();

simpsonsRoute.get('/', async (_req, res) => {
  const allSimpsons = await listAll();

  if (allSimpsons.message) {
    return res.status(500).json({ message: allSimpsons.message });
  }

  return res.status(200).json(allSimpsons);
});

simpsonsRoute.get('/:id', async (req, res) => {
  const { id } = req.params;
  const simpson = await findOne(id);

  if (simpson.message) {
    return res.status(500).json({ message: simpson.message });
  }

  return res.status(200).json(simpson);
});

module.exports = {
  simpsonsRoute,
};
