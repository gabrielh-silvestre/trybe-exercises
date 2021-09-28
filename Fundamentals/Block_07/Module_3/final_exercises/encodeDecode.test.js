const {encode, decode, code} = require('./encodeDecode');

describe('Verify functions encode() and decode()', () => {

  it('Verify if encode() and decode() are functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  const decodedStr = 'a, e, i, o, u';
  const encodedStr = '1, 2, 3, 4, 5';

  it('Verify if encode() encode right', () => {
    expect(encode(decodedStr)).toBe(encodedStr);
    expect(encode('gh bj')).toBe('gh bj');
  });

  it('Verify if decode() decode right', () => {
    expect(decode(encodedStr)).toBe(decodedStr);
    expect(decode('6789')).toBe('6789');
  });

  it('Verify encode() returned string length', () => {
    expect(encode(decodedStr).length).toBe(decodedStr.length);
  });

  it('Verify decode() returned string length', () => {
    expect(decode(encodedStr).length).toBe(encodedStr.length);
  });
});
