function hydrate(str) {
  const cupsArray = str.split('');
  const sum = cupsArray.filter((n) => Number.parseInt(n, 10))
  .map((n) => Number.parseInt(n, 10))
  .reduce((prevNumber, number) => prevNumber + number)

  return sum > 1 ? `${sum} copos de água` : `${sum} copo de água`;
}

module.exports = hydrate;
