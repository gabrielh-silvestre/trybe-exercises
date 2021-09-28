const code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(str) {
  let encodeMsg = str.split('');

  encodeMsg.forEach((letter) => {
    for (let key in code) {
      if (letter === key) {
        encodeMsg[encodeMsg.indexOf(letter)] = code[key];
      }
    }
  });

  return encodeMsg.join('');
}

function decode(str) {
  let decodeMsg = str.split('');

  decodeMsg.forEach((letter) => {
    for (let key in code) {
      if (letter === code[key].toString()) {
        decodeMsg[decodeMsg.indexOf(letter)] = key;
      }
    }
  });

  return decodeMsg.join('');
}

module.exports = {encode, decode, code};
