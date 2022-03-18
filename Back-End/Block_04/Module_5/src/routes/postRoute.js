const express = require('express');

const { showPost } = require('../controllers/postController');

const postRouter = express.Router();

postRouter.get('/:id', showPost);

module.exports = {
  postRouter,
};
