const { BooksService } = require('../../services/books');

const overWrite = async (req, res, next) => {
  const { id: bookId } = req.params;
  const { title, author, pageQuantity } = req.body;
  const book = { title, author, pageQuantity };

  try {
    await BooksService.overWrite({ bookId, book });
    return res.status(201).end();
  } catch (err) {
    console.log(err);
    next({ status: 500, message: 'Internal server error' });
  }
};

module.exports = {
  overWrite,
};
