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

const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);
