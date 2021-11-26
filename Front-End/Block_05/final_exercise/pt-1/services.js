function getRandomNumber() {
  Math.floor(Math.random() * 100);
}

function setStrInUpperCase(str) {
  return str.toUpperCase();
}

function getFirstLetter(str) {
  return str[0];
}

function concatStrings(str1, str2) {
  return str1 + str2;
}

async function getDogFromAPi() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = res.json();
  return data;
}

module.exports = {
  getRandomNumber,
  setStrInUpperCase,
  getFirstLetter,
  concatStrings,
  getDogFromAPi,
};
