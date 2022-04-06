const express = require('express');
const { BooksController } = require('../controllers/books');

const bookRouter = express.Router();

bookRouter.get('/:id', BooksController.findById);
bookRouter.get('/', BooksController.findAll);

bookRouter.post('/', BooksController.create);

module.exports = {
  bookRouter,
};
