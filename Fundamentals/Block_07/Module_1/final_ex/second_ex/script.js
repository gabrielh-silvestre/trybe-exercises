// const arrayMaker = (n) => {
//   const newArr = [];
//   for (let i = n - 1; i > 0; i -= 1) {
//     newArr.push(i);
//   }

//   return newArr;
// }

// const factorial = (n) => {
//   let nFactorial = n;
//   const controlArr = arrayMaker(n);

//   for (let n of controlArr) {
//     nFactorial *= n;
//   }

//   return nFactorial;
// }

// pt 1
const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);

// pt 2

const greaterWord = (str) => {
  const strArr = str.split(' ').sort((a, b) => a.length - b.length)
  return strArr[strArr.length - 1];
}

// pt 4

const changeLetter = (str, newStr, letter = 'x') => str.replace(letter, newStr);

const buildFinalPhrase = (sk1, sk2, sk3, sk4, sk5) => `${sk1}\n${sk2}\n${sk3}\n${sk4}\n${sk5}\n`

const addSkills = (str, skills) => `${str} Minhas cinco principais abilidades são:\n${buildFinalPhrase(...skills.sort())}`;

const tempArr = ['HTML', 'CSS', 'JavaScript', 'Python', 'GIT'];

console.log(addSkills(changeLetter('Tryber x aqui!', 'Gabriel'), tempArr));
