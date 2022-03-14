const { expect } = require('chai');
const { calcThreeNumbers } = require('../exercise-1');

describe('Test calcThreeNumbers', () => {
  it('1. If some parameters is not a number, should return "Informe apenas números"', async () => {
    const expectedError = 'Informe apenas números';
    
    try {
      await calcThreeNumbers(1, 3, 'a');
    } catch (err) {
      expect(err).to.equal(expectedError);
    }
  });

  it('2. If all parameters are numbers, should do calcs', async () => {
    const expectedReturn = (50 + 63) * 78;
    const realReturn = await calcThreeNumbers(50, 63, 78);

    expect(realReturn).to.equal(expectedReturn);
  });

  it('3. If some value are under 50, should return "Valor muito baixo"', async () => {
    const expectedError = 'Valor muito baixo';
    try {
      await calcThreeNumbers(1, 3, 9);
    } catch (err) {
      expect(err).to.equal(expectedError);
    }
  });

  it('4. If all values are above 50, should do calcs', async () => {
    const expectedReturn = (54 + 83) * 68;
    const realReturn = await calcThreeNumbers(54, 83, 68);

    expect(realReturn).to.equal(expectedReturn);
  });
});
