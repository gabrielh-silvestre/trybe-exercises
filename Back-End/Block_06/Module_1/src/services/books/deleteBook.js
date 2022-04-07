const { Book } = require('../../orm/models');

const remove = async (id) => {
  const book = await Book.findOne({
    where: {
      id,
    },
  });

  await book.destroy();
};

module.exports = {
  remove,
};
