const { expect } = require('chai');
const { getFibonnaciSequence } = require('../fibonacci');

describe('Test fibonacci sequence', () => {
  it('1. The first 5 elements of Fibonacci should be [0, 1, 1, 2, 3]', () => {
    const expectedSequence = [0, 1, 1, 2, 3];
    const resultSequence = getFibonnaciSequence(5);

    expect(resultSequence).to.deep.equal(expectedSequence);
  });

  it('2. The first 3 elements of Fibonacci should be [0, 1, 1]', () => {
    const expectedSequence = [0, 1, 1];
    const resultSequence = getFibonnaciSequence(3);

    expect(resultSequence).to.deep.equal(expectedSequence);
  });

  it('3. The first 10 elements of Fibonacci should be [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
    const expectedSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    const resultSequence = getFibonnaciSequence(10);

    expect(resultSequence).to.deep.equal(expectedSequence);
  });

  it('4. The first 31 elements of Fibonacci should be [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ....]', () => {
    const expectedSequence = [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
      317811, 514229, 832040,
    ];
    const resultSequence = getFibonnaciSequence(31);

    expect(resultSequence).to.deep.equal(expectedSequence);
  });
});
