const { CategoryService } = require('../../services/category');

const create = async (req, res, next) => {
  const { name } = req.body;
  const category = { name };

  try {
    const newCategory = await CategoryService.create(category);
    return res.status(201).json(newCategory);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: 'Internal server error' });
  }
};

const findAll = async (_req, res, next) => {
  try {
    const categories = await CategoryService.findAll();
    return res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    next({ statusCode: 500, message: 'Internal server error' });
  }
};

module.exports = {
  CategoryController: {
    create,
    findAll,
  },
};
