const fs = require('fs/promises');

const getCharacters = async () => {
  try {
    const stringfyCharacters = await fs.readFile('simpsons.json', 'utf8');
    return JSON.parse(stringfyCharacters).map(({ id, name }) => `${id} - ${name}`);
  } catch (err) {
    return new Error(err);
  }
};

const listCharacters = async () => {
  const characterList = await getCharacters();
  console.log(characterList);
};

listCharacters();

module.exports = { getCharacters };
