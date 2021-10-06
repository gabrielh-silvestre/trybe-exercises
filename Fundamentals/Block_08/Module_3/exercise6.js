const books = require('./template');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  return books.filter((book) => 2021 - book.releaseYear > 60)
    .map((book) => book.name);
}
