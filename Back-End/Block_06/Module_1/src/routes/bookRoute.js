const express = require('express');
const { BooksController } = require('../controllers/books');

const bookRouter = express.Router();

bookRouter.get('/', BooksController.findAll);
bookRouter.get('/:id', BooksController.findById);

module.exports = {
  bookRouter,
};
