const books = require("./template");

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const getName = ({name}) => {
  return name;
};

function longestNamedBook(books) {
  return books
    .reduce((acc, curr) => {
      return getName(acc).length > getName(curr).length ? acc : curr
    });
}
