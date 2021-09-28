function hydrate(str) {
  const cupsArray = str.split('');
  const numberArray = cupsArray.filter((n) => Number.parseInt(n, 10)).map((n) => Number.parseInt(n, 10));
  const sum = numberArray.reduce((prevNumber, number) => prevNumber + number)

  return sum > 1 ? `${sum} copos de água` : `${sum} copo de água`;
}

module.exports = hydrate;
