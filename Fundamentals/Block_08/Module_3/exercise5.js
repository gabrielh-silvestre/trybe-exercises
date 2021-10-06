const books = require('./template');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    .sort((a, b) => a.author.name.localeCompare(b.author.name))
    .map((book) => book.author.name);
}
