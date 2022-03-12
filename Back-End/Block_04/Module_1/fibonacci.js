const readlineSync = require('readline-sync');

const getFibonacciLimit = () =>  readlineSync.questionInt('Quantos números da sequência de Fibonacci você quer? ');

const getFibonnaciSequence = (sequenceLength) => {
  const initialFibonnaci = [1, 1];
  const INITIAL_LENGTH = initialFibonnaci.length;
  let tempArr = [...initialFibonnaci];

  for (let i = 0; i < (sequenceLength - INITIAL_LENGTH); i += 1) {
    tempArr.push(tempArr[i] + tempArr[i + 1]);
  }

  return tempArr;
}

const executeServiceFibonacci = () => {
  const fibonacciLimit = getFibonacciLimit();
  const fibonacciSequence = getFibonnaciSequence(fibonacciLimit);
  console.log(`A seguência de Fibonacci até ${fibonacciLimit} é: \n ${fibonacciSequence}`);

}

module.exports = {
  getFibonacciLimit,
  getFibonnaciSequence,
  executeServiceFibonacci,
}
