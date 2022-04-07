const { BooksService } = require('../../services/books');

const findById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const book = await BooksService.findById(id);
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
    next({ status: 500, message: 'Internal Error' });
  }
};

module.exports = {
  findById,
};
