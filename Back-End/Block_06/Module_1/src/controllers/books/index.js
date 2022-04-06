const { findAll } = require('./findAllBooks');
const { findById } = require('./findByIdBook');

module.exports = {
  BooksController: {
    findAll,
    findById,
  },
};
