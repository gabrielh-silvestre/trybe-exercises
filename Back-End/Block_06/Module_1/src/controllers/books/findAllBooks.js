const { BooksService } = require('../../services/books');

const findAll = async (_req, res, next) => {
  try {
    const books = await BooksService.findAll();
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    next({ status: 500, message: 'Internal Error' });
  }
};

module.exports = {
  findAll,
};
