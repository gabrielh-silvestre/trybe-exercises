const readlineSync = require('readline-sync');

const calcIMC = (height = 177, weight = 82) => {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}

const getUserInfo = () => {
  const weight = readlineSync.questionFloat('Quanto você pesa? ');
  const height = readlineSync.questionInt('Qual sua altura em cm? ');

  return {
    weight,
    height,
  }
};

const getClassificationIMC = (imc) => {
  switch (true) {
    case Number.parseFloat(imc) < 18.5:
      return `Seu IMC é ${imc}, abaixo do peso.`;
    case Number.parseFloat(imc) >= 18.5 && imc < 24.9:
      return `Seu IMC é ${imc}, peso normal.`;
    case Number.parseFloat(imc) >= 25 && imc < 29.9:
      return `Seu IMC é ${imc}, acima do peso.`;
    case Number.parseFloat(imc) >= 30 && imc < 34.9:
      return `Seu IMC é ${imc}, obesidade grau I.`;
    case Number.parseFloat(imc) >= 35 && imc < 39.9:
      return `Seu IMC é ${imc}, obesidade grau II.`;
    default:
      return `Seu IMC é ${imc}, obesidade grau III e IV.`;
  }
}

const executeServiceIMC = () => {
  const { weight, height } = getUserInfo();
  const imc = calcIMC(height, weight);
  console.log(getClassificationIMC(imc));
}

module.exports = {
  calcIMC,
  getClassificationIMC,
  executeServiceIMC,
};
