const readlineSync = require('readline-sync');

const numberToFactorial = readlineSync.questionInt('Qual número você deseja saber o fatorial? ');

const getFactorial = (limitNumber) => {
  let result = limitNumber;

  for (let i = (limitNumber - 1); i > 0; i -= 1) {
    result *= i;
  }

  return result;
}

console.log(getFactorial(numberToFactorial));
