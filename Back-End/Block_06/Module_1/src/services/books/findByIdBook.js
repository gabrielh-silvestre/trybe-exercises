const { Book } = require('../../orm/models');

const findById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

module.exports = {
  findById,
};
