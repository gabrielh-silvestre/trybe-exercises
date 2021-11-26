let {
  getRandomNumber,
  setStrInUpperCase,
  getFirstLetter,
  concatStrings,
  getDogFromAPi,
} = require('./services');

describe('Tests for random number function', () => {
  it('Exercise 01', () => {
    getRandomNumber = jest.fn().mockReturnValue(10);
    getRandomNumber();

    expect(getRandomNumber).toHaveBeenCalled();
    expect(getRandomNumber()).toBe(10);
  });

  it('Exercise 02', () => {
    getRandomNumber = jest.fn().mockImplementationOnce((n1, n2) => n1 / n2);

    const result = getRandomNumber(4, 2);
    expect(getRandomNumber).toHaveBeenCalled();
    expect(result).toBe(2);

    const secondResult = getRandomNumber();
    expect(secondResult).not.toBe(2);
  });

  it('Exercise 03', () => {
    getRandomNumber = jest
      .fn()
      .mockImplementation((n1, n2, n3) => n1 * n2 * n3);

    const result = getRandomNumber(4, 2, 2);
    expect(getRandomNumber).toHaveBeenCalled();
    expect(result).toBe(16);

    getRandomNumber.mockClear();
    getRandomNumber = jest.fn().mockImplementation((n) => n * 2);

    const secondResult = getRandomNumber(4);
    expect(getRandomNumber).toHaveBeenCalled();
    expect(secondResult).toBe(8);
  });

  it('Exercise 04', () => {
    setStrInUpperCase = jest
      .fn()
      .mockImplementation((str) => str.toLowerCase());
    expect(setStrInUpperCase('TREM')).toBe('trem');

    getFirstLetter = jest.fn().mockImplementation((str) => str[str.length - 1]);
    expect(getFirstLetter('trem')).toBe('m');

    concatStrings = jest
      .fn()
      .mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    expect(concatStrings('trem', 'piui', 'vrum')).toBe('trempiuivrum');

    setStrInUpperCase = jest
      .fn()
      .mockImplementation((str) => str.toUpperCase());
    expect(setStrInUpperCase('trem')).toBe('TREM');
  });

  it('Exercise 05', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        message: 'https://images.dog.ceo/breeds/hound-blood/n02088466_9697.jpg',
        status: 'success',
      }),
    });

    const dog = await getDogFromAPi();
    expect(fetch).toHaveBeenCalled();
    expect(dog.message).toBe('https://images.dog.ceo/breeds/hound-blood/n02088466_9697.jpg')
  });

});
