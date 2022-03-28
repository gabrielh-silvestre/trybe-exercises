// Desafio 10
function techList(arr, nm) {
  const techArray = arr.sort();

  return (arr.length <= 0) // usei o exemplo da condicional ternaria do Israel, challenges2.js linha 3 até 6. ref: https://github.com/tryber/sd-016-b-project-playground-functions/pull/12/files
    ? 'Vazio!'
    : techArray.map((e) => ({ tech: e, name: nm }));
}

// Desafio 11
const validSize = (arr) => arr.length === 11;

const validNumberValues = (arr) => arr.every((n) => n >= 0 && n <= 9);

const validRepeat = (arr) => {
  let control = true;

  arr.forEach((n) => {
    if (arr.filter((e) => e === n).length >= 3) control = false;
  });

  return control;
};

const phoneBuilder = (arr) => {
  const regex = RegExp('(\\d{2})(\\d{5})(\\d{4})'); // Utilizei a RegEx do Israel como referência: https://github.com/tryber/sd-016-b-project-playground-functions/pull/12/files
  return arr.join('').replace(regex, '($1) $2-$3');
};

function generatePhoneNumber(arr) {
  if (!validSize(arr)) return 'Array com tamanho incorreto.';
  if (!validNumberValues(arr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (!validRepeat(arr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return phoneBuilder(arr);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const sizeCheck1 = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  const sizeCheck2 = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);

  return sizeCheck1 && sizeCheck2;
}

// Desafio 13
function hydrate(str) {
  const cupsArray = str.split('');
  const totalDrinks = cupsArray.filter((e) => Number.parseInt(e, 10))
    .map((e) => Number.parseInt(e, 10))
    .reduce((prev, curr) => prev + curr);

  return totalDrinks > 1 ? `${totalDrinks} copos de água` : `${totalDrinks} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
