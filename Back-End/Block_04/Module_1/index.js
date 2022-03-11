const readlineSync = require('readline-sync');

const services = [
  'Calculadora IMC',
  'Calculadora de Velocidade Média',
  'Jogo de Advinhação',
  'Calculadora de Fatorial',
];

const selectedService = readlineSync.keyInSelect(services, 'O que quer fazer?');

const servicesFiles = [
  () => require('./imc'),
  () => require('./speed'),
  () => require('./guessGame'),
  () => require('./factorial'),
];

console.log(`Você selecionou ${services[selectedService]}`);
console.log('------------');
servicesFiles[selectedService]();
