const isNull = (...value) => value.every((v) => v === null);

const isDefinied = (...value) => value.every((v) => typeof v !== 'undefined');

const isNotEmpty = (...value) => value.every((v) => v.length > 0);

const isMoreThenMinLength = (minLength, ...strings) =>
  strings.every((s) => s.length >= minLength);

const isMoreThenMinNumber = (minNumber, ...numbers) =>
  numbers.every((n) => n >= minNumber);

const isLessThenMaxNumber = (maxNumber, ...numbers) =>
  numbers.every((n) => n <= maxNumber);

const haveFormat = (regexFormat, ...strings) =>
  strings.every((s) => regexFormat.test(s));

module.exports = {
  isNull,
  isDefinied,
  isNotEmpty,
  isMoreThenMinLength,
  isMoreThenMinNumber,
  isLessThenMaxNumber,
  haveFormat,
};
