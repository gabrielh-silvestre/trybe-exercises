const { findAll } = require('./findAllBooks');
const { findById } = require('./findByIdBook');

module.exports = {
  BooksService: {
    findAll,
    findById,
  },
};
