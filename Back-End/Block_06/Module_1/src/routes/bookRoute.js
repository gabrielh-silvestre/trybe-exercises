const express = require('express');
const { BooksController } = require('../controllers/books');

const bookRouter = express.Router();

bookRouter.get('/:id', BooksController.findById);
bookRouter.get('/', BooksController.findAll);

bookRouter.post('/:id', BooksController.overWrite);
bookRouter.post('/', BooksController.create);

bookRouter.delete('/:id', BooksController.remove);

module.exports = {
  bookRouter,
};
