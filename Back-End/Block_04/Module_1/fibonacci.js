const readlineSync = require('readline-sync');

const fibonacciLimit = readlineSync.questionInt('Quantos números da sequência de Fibonacci você quer? ');

const initialFibonnaci = [0, 1, 1];
const INITIAL_LENGTH = initialFibonnaci.length;

const getFibonnaciSequence = (sequenceLength) => {
  let tempArr = [...initialFibonnaci];

  for (let i = 1; i <= (sequenceLength - INITIAL_LENGTH); i += 1) {
    tempArr.push(tempArr[i] + tempArr[i + 1]);
  }

  return tempArr;
}

const fibonacciSequence = getFibonnaciSequence(fibonacciLimit);

console.log(`A seguência de Fibonacci até ${fibonacciLimit} é: \n ${fibonacciSequence}`);
