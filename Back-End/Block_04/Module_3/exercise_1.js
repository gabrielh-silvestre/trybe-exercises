const isPositive = (n) => {
  const number = Number(n);

  if (Number.isNaN(number)) return 'o valor deve ser um número';

  switch (true) {
    case number > 0:
      return 'positivo';
    case number < 0:
      return 'negativo';
    default:
      return 'neutro';
  }
};

module.exports = { isPositive };
