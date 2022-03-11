const readlineSync = require('readline-sync');

const calcIMC = (height = 177, weight = 82) => {
  console.log('Seu IMC é de ' + (weight / ((height / 100) ** 2)).toFixed(2));
}

const getUserInfo = () => {
  const weight = readlineSync.questionFloat('Quanto você pesa? ');
  const height = readlineSync.questionInt('Qual sua altura em cm? ');

  return {
    weight,
    height,
  }
};

const { weight, height } = getUserInfo();

calcIMC(height, weight);
