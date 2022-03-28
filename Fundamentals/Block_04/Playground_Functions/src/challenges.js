const code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

// Desafio 1
function compareTrue(arg1, arg2) {
  return arg1 && arg2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arr) {
  const ordenedArr = arr.sort((a, b) => a - b).filter((e) => e === arr[arr.length - 1]);

  return ordenedArr.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cats = { cat1: Math.abs(cat1 - mouse), cat2: Math.abs(cat2 - mouse) };

  if (cats.cat1 < cats.cat2) return 'cat1';
  if (cats.cat1 > cats.cat2) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  const strArray = arr.map((n) => {
    if (n % 3 === 0 && n % 5 === 0) return 'fizzBuzz';
    if (n % 3 === 0) return 'fizz';
    if (n % 5 === 0) return 'buzz';
    return 'bug!';
  });

  return strArray;
}

// Desafio 9
function encode(str) {
  const encodeMsg = str.split('')
    .map((letter) => (code[letter] ? code[letter] : letter));

  return encodeMsg.join('');
}
function decode(str) {
  const codeKeys = Object.keys(code);
  const codeValues = Object.values(code);
  const decodeMsg = str.split('')
    .map((letter) => (codeValues.indexOf(Number.parseInt(letter, 10)) !== -1
      ? codeKeys[codeValues.indexOf(Number.parseInt(letter, 10))]
      : letter));

  return decodeMsg.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
