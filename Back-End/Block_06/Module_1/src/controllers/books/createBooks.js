const { BooksService } = require('../../services/books');

const create = async (req, res, next) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = { title, author, pageQuantity };

  try {
    const book = await BooksService.create(newBook);
    res.status(201).json(book);
  } catch (err) {
    console.log(err);
    next({ status: 500, message: 'Internal Error' });
  }
};

module.exports = {
  create,
};
