const { expect } = require('chai');

const { isPositive } = require('../exercise_1');

const POSITIVE_MSG = 'positivo';
const NEGATIVE_MSG = 'negativo';
const NEUTRAL_MSG = 'neutro';
const ERROR_MSG = 'o valor deve ser um número'

describe('Test isPositive', () => {
  it('1. Function should return "positivo" for positive numbers', () => {
    const POSITIVE_NUMBERS = [1, 3, 5, 12, 312, 9];

    POSITIVE_NUMBERS.forEach((number) => {
      expect(isPositive(number)).to.be.equal(POSITIVE_MSG);
    });
  });

  it('2. Function should return "negativo" for negative numbers', () => {
    const NEGATIVE_NUMBERS = [-1, -3, -5, -12, -312, -9];

    NEGATIVE_NUMBERS.forEach((number) => {
      expect(isPositive(number)).to.be.equal(NEGATIVE_MSG);
    });
  });

  it('3. Function should return "neutro" when number is zero', () => {
    expect(isPositive(0)).to.be.equal(NEUTRAL_MSG);
  });

  it('4. Function should return right mensage', () => {
    expect(isPositive(50)).to.be.equal(POSITIVE_MSG);
    expect(isPositive(-48)).to.be.equal(NEGATIVE_MSG);
    expect(isPositive(0)).to.be.equal(NEUTRAL_MSG);
  });

  it('5. Function should return an error when receive a string as argument', () => {
    expect(isPositive('trem')).to.be.equal(ERROR_MSG);
  });

  it('6. Function should convert string when it is possible', () => {
    expect(isPositive('50')).to.be.equal(POSITIVE_MSG);
    expect(isPositive('-48')).to.be.equal(NEGATIVE_MSG);
    expect(isPositive('0')).to.be.equal(NEUTRAL_MSG);
  });
});
