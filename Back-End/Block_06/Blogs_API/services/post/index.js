const {
  BlogPost,
  Category,
  PostCategory,
  User,
  Sequelize,
} = require('../../models');

const {
  Op: { like, or },
} = Sequelize;

const create = async ({ userId, title, content, categoryIds }) => {
  const newPost = { userId, title, content };
  const post = await BlogPost.create(newPost);

  categoryIds.forEach(async (categoryId) => {
    const newPostCategory = { postId: post.id, categoryId };
    await PostCategory.create(newPostCategory);
  });

  const createdPost = await BlogPost.findByPk(post.id, {
    attributes: {
      exclude: ['published', 'updated'],
    },
  });

  return createdPost;
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const findById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return post;
};

const findByTerm = async (term) => {
  const posts = await BlogPost.findAll({
    where: {
      [or]: [ // ref: https://sequelize.org/api/v6/class/src/model.js~model#static-method-findAll (Query OR example)
        { title: { [like]: `%${term}%` } }, // ref: https://stackoverflow.com/questions/63213329/sequelize-query-where-like
        { content: { [like]: `%${term}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const update = async (id, { title, content }) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    return null;
  }

  post.title = title;
  post.content = content;
  await post.save();

  return post;
};

const destroy = async (id) => {
  const post = await BlogPost.findByPk(id);

  if (!post) {
    return null;
  }

  await post.destroy();

  return true;
};

module.exports = {
  PostService: {
    create,
    findAll,
    findById,
    update,
    destroy,
    findByTerm,
  },
};
