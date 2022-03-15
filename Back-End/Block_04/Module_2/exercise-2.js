const { calcThreeNumbers } = require('./exercise-1');

const randomNumber = () => Math.ceil(Math.random() * 100);

const simulateParameters = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const num3 = randomNumber();

  calcThreeNumbers(num1, num2, num3)
    .then((value) => console.log(value))
    .catch((err) => console.log(err));
};

simulateParameters();
