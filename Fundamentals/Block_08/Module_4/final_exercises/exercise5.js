const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const splitLetters = (str) => str.split('');

const countA = (arr) => arr.filter((l) => l.toLowerCase() === 'a').length;

function containsA(arr) {
  return arr
    .map((name) => splitLetters(name))
    .map((arrName) => countA(arrName))
    .reduce((acc, curr) => acc + curr);
}

console.log(containsA(names));
