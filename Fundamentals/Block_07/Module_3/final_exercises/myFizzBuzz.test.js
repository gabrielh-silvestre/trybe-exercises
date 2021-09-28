const myFizzBuzz = require('./myFizzBuzz');

describe('Verify function myFizzBuzz()', () => {

  it('Verify if myFizzBuzz return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Verify if myFizzBuzz return fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  it('Verify if myFizzBuzz return buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Verify if myFizzBuzz return the parameter number', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('Verify if myFizzBuzz return the parameter number', () => {
    expect(myFizzBuzz('5')).toBe(false);
  });

});
