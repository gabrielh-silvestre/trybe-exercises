// Exercício 1

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newHiredPerson = (name) => {
  return {
    nomeCompleto: name,
    email: `${name.toLowerCase().replace(' ', '_')}@betrybe.com`,
  }
};

// Exercício 2

const giveAWay = (n, callback) => {
  return callback(n, Math.round(Math.random() * 5));
};

const checkWin = (n, winner) => {
  return n === winner ? 'Parabéns você ganhou' : 'Tente novamente';
};

// Exercício 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const countTestAnswers = (rightAnswers, studentAnswers, callback) => {
  return callback(rightAnswers, studentAnswers);
};

const getWrongAnswers = (rightAnswers, studentAnswers) => {
  return studentAnswers.filter((answer, i) => answer !== rightAnswers[i]).filter((answer) => answer !== 'N.A');
};

const getRightAnswers = (rightAnswers, studentAnswers) => {
  return studentAnswers.filter((answer, i) => answer === rightAnswers[i]);
}

const checkAnswers = (rightAnswers, studentAnswers) => {
  const rightPoints = getRightAnswers(rightAnswers, studentAnswers);
  const wrongPoints = getWrongAnswers(rightAnswers, studentAnswers);

  return rightPoints.length - (wrongPoints.length * 0.5);
};
