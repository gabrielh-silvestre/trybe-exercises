const myRemove = require('./myRemove');

const testArr = [1, 2, 3, 4];

describe('Verify function myRemove()', () => {

  it('Verify if myRemove() removes number 3 from this array [1, 2, 3, 4]', () => {
    expect(myRemove(testArr, 3)).toEqual([1, 2, 4]);
  });

  it('Verify if myRemove() does not removes number 3 from this array [1, 2, 3, 4]', () => {
    expect(myRemove(testArr, 3)).not.toEqual([1, 2, 4]);
  });

  it('Verify if myRemove() removes number 5 from this array [1, 2, 3, 4]', () => {
    expect(myRemove(testArr, 5)).toEqual([1, 2, 3, 4]);
  });

});
