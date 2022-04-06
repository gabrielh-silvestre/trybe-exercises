const express = require('express');
const { BooksController } = require('../controllers/books');
const bookRouter = express.Router();

bookRouter.get('/', BooksController.findAll);

module.exports = {
  bookRouter,
};
