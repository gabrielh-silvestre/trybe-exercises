const readlineSync = require('readline-sync');

const getUserInfo = () => {
  const distance = readlineSync.questionInt('Qual a distância percorrida em Km? ');
  const time = readlineSync.questionInt('Qual o tempo levado em horas? ');

  return {
    distance,
    time,
  }
}

const calcAvgSpeed = (distance, time) => `A velocidade média é de ${distance / time} Km/h`;

const { distance, time } = getUserInfo();
console.log(calcAvgSpeed(distance, time));
