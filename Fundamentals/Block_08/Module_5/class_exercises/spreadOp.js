// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maca', 'Abacaxi', 'Acai'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Café', 'Frango frito', 'Hamburguer'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
