const { User } = require('../../models');
const { createToken } = require('../../utils/auth');

const create = async ({ displayName, email, password, image }) => {
  const user = await User.create({
    displayName,
    email,
    password,
    image,
  });

  return createToken(user.id);
};

const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return null;
  }

  const isPasswordValid = user.password === password;

  if (!isPasswordValid) {
    return null;
  }

  return createToken(user.id);
};

const findAll = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return users;
};

const findById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  });

  return user;
};

const destroy = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    return null;
  }

  await user.destroy();

  return true;
};

module.exports = {
  UserService: {
    create,
    login,
    findAll,
    findById,
    destroy,
  },
};
