const isPositive = (n) => {
  switch (true) {
    case n > 0:
      return 'positivo';
    case n < 0:
      return 'negativo';
    default:
      return 'neutro';
  }
};

module.exports = { isPositive };
