const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const { simpsons, filteredSimpsons } = require('./mockSimpsons');

const { getCharacters } = require('../exercise-4-1');
const { findCharacter } = require('../exercise-4-2');
const { removeCharacter } = require('../exercise-4-3');

describe('Test getCharacters function of exercise 4-1', () => {
  it('1. getCharacters should return data in "${id} - ${name}" format', async () => {
    const expectedResult = simpsons.map(({ id, name }) => `${id} - ${name}`);

    try {
      const results = await getCharacters();
      expect(results).to.deep.equal(expectedResult);
    } catch (err) {
      throw new Error(err);
    }
  });
});

describe('Test findCharacter function of exercise 4-2', () => {
  it('1. findCharacter should return character info based on id', async () => {
    const SEARCH_ID = 2;
    const expectedResult = { id: '2', name: 'Marge Simpson' };

    try {
      const result = await findCharacter(SEARCH_ID);
      expect(result).to.deep.equal(expectedResult);
    } catch (err) {
      throw new Error(err);
    }
  });

  it('2. findCharacter should return an error mensage if character id does not exist based', async () => {
    const SEARCH_ID = 11;
    const expectedError = 'id não encontrado';

    try {
      await findCharacter(SEARCH_ID);
    } catch (err) {
      expect(err.message).to.equal(expectedError);
    }
  });
});

// describe('Test removeCharacter function of exercise 4-3', () => {
//   before(() => {
//     sinon.stub(fs, 'readFile').returns(filteredSimpsons);
//     sinon.stub(fs, 'writeFile');
//   });

//   after(() => {
//     sinon.restore();
//   });

//   it('1. removeCharacter should remove characters with id equal to 10 and 6', async () => {
//     try {
//       const result = await removeCharacter();
//       expect(result).to.deep.equal(filteredSimpsons);
//     } catch (err) {
//       throw new Error(err.message);
//     }
//   });
// });
