const { PostService } = require('../../services/post');

const INTERNAL_ERROR = 'Internal server error';

const create = async (req, res, next) => {
  const { userId } = req;
  const { title, content, categoryIds } = req.body;
  const newPost = { userId, title, content, categoryIds };

  try {
    const post = await PostService.create(newPost);
    res.status(201).json(post);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: INTERNAL_ERROR });
  }
};

const findAll = async (req, res, next) => {
  try {
    const posts = await PostService.findAll();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: INTERNAL_ERROR });
  }
};

const findById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await PostService.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: INTERNAL_ERROR });
  }
};

const findByTerm = async (req, res, next) => {
  const { q } = req.query;

  try {
    const posts = await PostService.findByTerm(q);
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: INTERNAL_ERROR });
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const updatedPost = await PostService.update(id, { title, content });

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: INTERNAL_ERROR });
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedPost = await PostService.destroy(id);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    res.status(204).end();
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: INTERNAL_ERROR });
  }
};

module.exports = {
  PostController: {
    create,
    findAll,
    findById,
    findByTerm,
    update,
    destroy,
  },
};
