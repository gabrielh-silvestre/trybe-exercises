const { expect } = require('chai');
const { calcIMC, getClassificationIMC } = require('../imc');

describe('Test IMC calculator', () => {
  it('1. IMC of a people who has 1.77m and 82Kg should be 26.17', () => {
    const expectedIMC = 26.17;
    const resultIMC = calcIMC(177, 82);

    expect(Number(resultIMC)).to.equal(expectedIMC);
  });

  it('2. IMC of a people who has 1.92m and 89Kg should be 26.17', () => {
    const expectedIMC = 24.14;
    const resultIMC = calcIMC(192, 89);

    expect(Number(resultIMC)).to.equal(expectedIMC);
  });

  it('3. IMC of a people who has 1.82m and 60Kg should be 26.17', () => {
    const expectedIMC = 18.11;
    const resultIMC = calcIMC(182, 60);

    expect(Number(resultIMC)).to.equal(expectedIMC);
  });

  it('4. IMC of a people who has 1.65m and 100Kg should be 26.17', () => {
    const expectedIMC = 36.73;
    const resultIMC = calcIMC(165, 100);

    expect(Number(resultIMC)).to.equal(expectedIMC);
  });
});

describe('Test returns of IMC table', () => {
  it('1. The IMC of 24.5 should includes "peso normal" and the IMC value', () => {
    const expectedMessage = 'peso normal';
    const IMC = '24.5';
    const returnedMessage = getClassificationIMC(IMC);

    expect(returnedMessage).to.have.string(expectedMessage);
    expect(returnedMessage).to.have.string(IMC);
  });

  it('2. The IMC of 17.4 should includes "abaixo do peso" and the IMC value', () => {
    const expectedMessage = 'abaixo do peso';
    const IMC = '17.4';
    const returnedMessage = getClassificationIMC(IMC);

    expect(returnedMessage).to.have.string(expectedMessage);
    expect(returnedMessage).to.have.string(IMC);
  });

  it('3. The IMC of 27.89 should includes "acima do peso" and the IMC value', () => {
    const expectedMessage = 'acima do peso';
    const IMC = '27.89';
    const returnedMessage = getClassificationIMC(IMC);

    expect(returnedMessage).to.have.string(expectedMessage);
    expect(returnedMessage).to.have.string(IMC);
  });

  it('4. The IMC of 36.18 should includes "obesidade grau II" and the IMC value', () => {
    const expectedMessage = 'obesidade grau II';
    const IMC = '36.18';
    const returnedMessage = getClassificationIMC(IMC);

    expect(returnedMessage).to.have.string(expectedMessage);
    expect(returnedMessage).to.have.string(IMC);
  });
});
