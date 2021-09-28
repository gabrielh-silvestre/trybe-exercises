function hydrate(str) {
  let cupsArray = str.split('');
  const numberArray = [];
  let sum = 0;

  for (let i of cupsArray) {
    if (Number.parseInt(i, 10)) {
      numberArray.push(Number.parseInt(i, 10));
    }
  }

  for (let n of numberArray) {
    sum += n;
  }

  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

module.exports = hydrate;
