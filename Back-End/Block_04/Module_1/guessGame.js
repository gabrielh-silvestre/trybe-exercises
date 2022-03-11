const readlineSync = require('readline-sync');

const getRandomNumber = () => Math.floor(Math.random() * 10);
const randomNumber = getRandomNumber();
const MAX_TRY = 5;
let tryNumber = 0;

console.log('Advinhe o número de 0 até 10');

readlineSync.promptLoop((input) => {
  tryNumber += 1;

  if (randomNumber === Number(input)) {
    console.log(`Você acertou em ${tryNumber} tentativas, parabéns!`);
    return randomNumber === Number(input);
  }

  if (MAX_TRY - tryNumber !== 0) {
    console.log(`Você tem ${MAX_TRY - tryNumber} tentativas restantes.`);
  }

  if (tryNumber === MAX_TRY) {
    console.log(`O número era ${randomNumber}, você excedeu suas tentativas!`);
    return tryNumber === MAX_TRY;
  }
});
