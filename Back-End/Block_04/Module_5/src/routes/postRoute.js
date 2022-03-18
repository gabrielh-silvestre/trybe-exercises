const express = require('express');

const { showPost, listAllPosts } = require('../controllers/postController');

const postRouter = express.Router();

postRouter.get('/:id', showPost);
postRouter.get('/', listAllPosts);

module.exports = {
  postRouter,
};
