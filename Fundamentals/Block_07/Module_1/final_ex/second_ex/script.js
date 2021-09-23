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
