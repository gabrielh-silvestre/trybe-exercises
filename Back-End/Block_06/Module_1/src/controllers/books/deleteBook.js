const { BooksService } = require('../../services/books');

const remove = async (req, res, next) => {
  const { id } = req.params;

  try {
    await BooksService.remove(id);

    res.status(200).json({
      message: 'Book deleted successfully',
    });
  } catch (err) {
    console.log(err);
    next({ status: 500, message: 'Internal error' });
  }
};

module.exports = {
  remove,
};
