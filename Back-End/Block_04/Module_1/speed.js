const readlineSync = require('readline-sync');

const getUserInfo = () => {
  const distance = readlineSync.questionInt('Qual a distância percorrida em Km? ');
  const time = readlineSync.questionInt('Qual o tempo levado em horas? ');

  return {
    distance,
    time,
  }
}

const calcAvgSpeed = (distance, time) => Math.round(distance / time);

const executeServiceSpeed = () => {
  const { distance, time } = getUserInfo();
  const avgSpeed = calcAvgSpeed(distance, time);

  console.log( `A velocidade média é de ${avgSpeed} Km/h`);
}


module.exports = {
  calcAvgSpeed,
  executeServiceSpeed,
}
