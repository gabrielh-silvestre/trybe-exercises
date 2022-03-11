const calcIMC = (height = 177, weight = 82) => {
  console.log((weight / ((height / 100) ** 2)).toFixed(2));
}

calcIMC();
