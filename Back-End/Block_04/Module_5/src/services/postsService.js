const { posts } = require('../posts');

const CODES = {
  success: 200,
  notFound: 404,
};

const findPost = (postId) => {
  const post = posts.find((p) => p.id === Number(postId));
  const { success, notFound } = CODES;

  return !post
    ? { status: notFound, message: 'post not found' }
    : { status: success, post };
};

const getAllPosts = () => {
  const { success } = CODES;

  return { status: success, posts };
};

module.exports = {
  findPost,
  getAllPosts,
};
