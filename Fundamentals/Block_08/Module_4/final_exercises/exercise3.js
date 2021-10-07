const books = require("./template");

const expectedResult = 43;

const getAge = ({author, releaseYear}) => {
  return releaseYear -  author.birthYear;
}

function averageAge(books) {
  return books
    .map((book) => getAge(book))
    .reduce((acc, curr) => acc + curr) / books.length;
}
