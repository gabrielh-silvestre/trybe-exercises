const { findAll } = require('./findAllBooks');
const { findById } = require('./findByIdBook');
const { create } = require('./createBooks');

module.exports = {
  BooksService: {
    findAll,
    findById,
    create,
  },
};
