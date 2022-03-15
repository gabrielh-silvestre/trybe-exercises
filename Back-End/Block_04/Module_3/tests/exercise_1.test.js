const { expect } = require('chai');

const { isPositive } = require('../exercise_1');

describe('Test isPositive', () => {
  it('1. Function should return "positivo" for positive numbers', () => {
    const POSITIVE_NUMBERS = [1, 3, 5, 12, 312, 9];

    POSITIVE_NUMBERS.forEach((number) => {
      expect(isPositive(number)).to.be.equal('positivo');
    });
  });

  it('2. Function should return "negativo" for negative numbers', () => {
    const NEGATIVE_NUMBERS = [-1, -3, -5, -12, -312, -9];

    NEGATIVE_NUMBERS.forEach((number) => {
      expect(isPositive(number)).to.be.equal('negativo');
    });
  });

  it('3. Function should return "neutro" when number is zero', () => {
    expect(isPositive(0)).to.be.equal('neutro');
  });

  it('4. Function should return right mensage', () => {
    const NUMBERS = [1, 3, -5, -12, -312, 0];

    NUMBERS.forEach((number) => {
      switch (true) {
        case number > 0:
          expect(isPositive(number)).to.be.equal('positivo');
        case number < 0:
          expect(isPositive(number)).to.be.equal('negativo');
        default:
          expect(isPositive(number)).to.be.equal('neutro');
      }
    });
  });
});
