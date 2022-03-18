const { findPost, getAllPosts } = require('../services/postsService');

const showPost = (req, res) => {
  const { id } = req.params;
  const { message, status, post } = findPost(id);

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json({ post });
};

const listAllPosts = (_req, res) => {
  const { status, posts } = getAllPosts();

  return res.status(status).json({ posts });
};

module.exports = {
  showPost,
  listAllPosts,
};
