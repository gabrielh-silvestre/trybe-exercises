const { expect } = require('chai');
const { getFactorial } = require('../factorial');

describe('Test factorial', () => {
  it('1. Factorial of 5 should be 120', () => {
    const expectedFactorial = 120;
    const resultFactorial = getFactorial(5);

    expect(resultFactorial).to.be.equal(expectedFactorial);
  });

  it('2. Factorial of 8 should be 40320', () => {
    const expectedFactorial = 40320;
    const resultFactorial = getFactorial(8);

    expect(resultFactorial).to.be.equal(expectedFactorial);
  });

  it('3. Factorial of 10 should be 3628800', () => {
    const expectedFactorial = 3628800;
    const resultFactorial = getFactorial(10);

    expect(resultFactorial).to.be.equal(expectedFactorial);
  });

  it('4. Factorial of 0 should be 1', () => {
    const expectedFactorial = 1;
    const resultFactorial = getFactorial(0);

    expect(resultFactorial).to.be.equal(expectedFactorial);
  });

  it('5. Factorial of 1 should be 1', () => {
    const expectedFactorial = 1;
    const resultFactorial = getFactorial(1);

    expect(resultFactorial).to.be.equal(expectedFactorial);
  });
});
