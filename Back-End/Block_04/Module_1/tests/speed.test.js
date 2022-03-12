const { expect } = require('chai');
const { calcAvgSpeed } = require('../speed');

describe('Test average speed calculators works right', () => {
  it('1. Average speed of 100Km travelled in 2 hours should be 50 Km/h', () => {
    const expectedAverageSpeed = 50;
    const resultSpeed = calcAvgSpeed(100, 2);

    expect(resultSpeed).to.equal(expectedAverageSpeed);
  });

  it('2. Average speed of 1Km travelled in 1 hour should be 1 Km/h', () => {
    const expectedAverageSpeed = 1;
    const resultSpeed = calcAvgSpeed(1, 1);

    expect(resultSpeed).to.equal(expectedAverageSpeed);
  });

  it('3. Average speed of 215Km travelled in 4 hours should be 54 Km/h', () => {
    const expectedAverageSpeed = 54;
    const resultSpeed = calcAvgSpeed(215, 4);

    expect(resultSpeed).to.equal(expectedAverageSpeed);
  });

  it('4. Average speed of 1205Km travelled in 3 hours should be 402 Km/h', () => {
    const expectedAverageSpeed = 402;
    const resultSpeed = calcAvgSpeed(1205, 3);

    expect(resultSpeed).to.equal(expectedAverageSpeed);
  });
});