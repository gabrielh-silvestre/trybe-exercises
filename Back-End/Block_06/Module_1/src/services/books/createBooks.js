const { Book } = require('../../orm/models');

const create = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({
    title,
    author,
    pageQuantity,
  });

  return book;
};

module.exports = {
  create,
};
