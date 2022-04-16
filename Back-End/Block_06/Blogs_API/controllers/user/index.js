const { UserService } = require('../../services/user');

const INTERNAL_ERROR = 'Internal server error';

const create = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const newUser = { displayName, email, password, image };

  try {
    const userToken = await UserService.create(newUser);
    return res.status(201).json({ token: userToken });
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: INTERNAL_ERROR });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = { email, password };

  try {
    const userToken = await UserService.login(user);

    if (!userToken) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(200).json({ token: userToken });
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: INTERNAL_ERROR });
  }
};

const findAll = async (_req, res, next) => {
  try {
    const users = await UserService.findAll();

    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: INTERNAL_ERROR });
  }
};

const findById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await UserService.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: INTERNAL_ERROR });
  }
};

const destroy = async (req, res, next) => {
  const { userId } = req;

  try {
    const user = await UserService.destroy(userId);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(204).end();
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: INTERNAL_ERROR });
  }
};

module.exports = {
  UserController: {
    create,
    login,
    findAll,
    findById,
    destroy,
  },
};
