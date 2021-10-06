const books = require("./template");

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  const rightBook = books.filter((book) => {
    const [firstInit, secondInit, thirdInit] = book.author.name.split(' ');
    return firstInit.endsWith('.') && secondInit.endsWith('.') && thirdInit.endsWith('.');
  });

  return rightBook[0].name;
}
