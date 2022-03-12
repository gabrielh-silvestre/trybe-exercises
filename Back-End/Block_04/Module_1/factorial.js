const readlineSync = require('readline-sync');

const getFactorial = (limitNumber) => {
  if (limitNumber === 0) return 1;

  let result = limitNumber;

  for (let i = (limitNumber - 1); i > 0; i -= 1) {
    result *= i;
  }

  return result;
}

const executeServiceFactorial = () => {
  const numberToFactorial = readlineSync.questionInt('Qual número você deseja saber o fatorial? ');

  console.log(getFactorial(numberToFactorial));
}


module.exports = {
  getFactorial,
  executeServiceFactorial,
}
