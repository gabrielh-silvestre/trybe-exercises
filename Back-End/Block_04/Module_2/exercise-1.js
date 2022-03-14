const isNumber = (value) => typeof value === 'number';
const MIN_VALUE = 50;

const calcThreeNumbers = (a, b, c) => (
  new Promise((res, rej) => {
    if (!isNumber(a) || !isNumber(b) || !isNumber(c)) {
      return rej('Informe apenas números');
    }

    if (a < MIN_VALUE || b < MIN_VALUE || c < MIN_VALUE) {
      return rej('Valor muito baixo');
    }

    return res((a + b) * c);
  })
);

module.exports = { calcThreeNumbers };
