const { Book } = require('../../orm/models');

const findAll = async () => {
  const books = await Book.findAll();
  return books;
};

module.exports = {
  findAll,
};
