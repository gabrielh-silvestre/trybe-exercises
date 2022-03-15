const { calcThreeNumbers } = require('./exercise-1');

const randomNumber = () => Math.ceil(Math.random() * 100);

const simulateParameters = async () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const num3 = randomNumber();

  try {
    const result = await calcThreeNumbers(num1, num2, num3);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

simulateParameters();
