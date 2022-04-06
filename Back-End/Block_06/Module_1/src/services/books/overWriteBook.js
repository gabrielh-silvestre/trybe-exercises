const { Book } = require('../../orm/models');

const overWrite = async ({ bookId, book }) => {
  await Book.update(book, {
    where: {
      id: bookId,
    },
  });
};

module.exports = {
  overWrite,
};
