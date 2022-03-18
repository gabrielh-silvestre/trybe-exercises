const { posts } = require('../posts');

const findPost = (postId) => {
  const post = posts.find((p) => p.id === Number(postId));

  return !post
    ? { status: 404, message: 'post not found' }
    : { status: 200, post };
};

module.exports = {
  findPost,
};
