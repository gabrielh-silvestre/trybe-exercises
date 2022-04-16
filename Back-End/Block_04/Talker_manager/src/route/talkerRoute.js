const express = require('express');

const { auth } = require('../middlewares/auth');
const {
  listAllTalkers,
  listOneTalker,
  addTalker,
  editTalker,
  deleteTalker,
  searchTalkersByTerm,
} = require('../controller/talkerController');

const talkerRouter = express.Router();

talkerRouter.get('/search', auth, searchTalkersByTerm);
talkerRouter.get('/:id', listOneTalker);
talkerRouter.put('/:id', auth, editTalker);
talkerRouter.delete('/:id', auth, deleteTalker);
talkerRouter.get('/', listAllTalkers);
talkerRouter.post('/', auth, addTalker);

module.exports = {
  talkerRouter,
};
