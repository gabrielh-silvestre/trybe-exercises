const { findAll } = require('./findAllBooks');
const { findById } = require('./findByIdBook');
const { create } = require('./createBooks');
const { overWrite } = require('./overWriteBook');

module.exports = {
  BooksController: {
    findAll,
    findById,
    create,
    overWrite,
  },
};
