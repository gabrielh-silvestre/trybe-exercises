const sum = require('./sum');

describe('Verify function sum()', () => {

  it('Verify sum(4, 5)', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Verify sum(0, 0)', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Verify sum() Type Error', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });

});
