const { findAll } = require('./findAllBooks');
const { findById } = require('./findByIdBook');
const { create } = require('./createBooks');
const { overWrite } = require('./overWriteBook');
const { remove } = require('./deleteBook');

module.exports = {
  BooksController: {
    findAll,
    findById,
    create,
    overWrite,
    remove,
  },
};
