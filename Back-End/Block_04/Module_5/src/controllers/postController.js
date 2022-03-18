const { findPost } = require('../services/postsService');

const showPost = (req, res) => {
  const { id } = req.params;
  const { message, status, post } = findPost(id);

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json({ post });
};

module.exports = {
  showPost,
};
