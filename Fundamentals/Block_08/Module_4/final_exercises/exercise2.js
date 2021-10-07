const books = require('./template');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames(books) {
  return books.map((book) => book.author.name)
    .reduce((acc, curr) => acc.concat(', ', curr));
}
