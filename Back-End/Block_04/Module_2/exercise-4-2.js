const fs = require('fs/promises');

const findCharacter = async (id) => {
  const stringfyCharacters = await fs.readFile('simpsons.json', 'utf8');
  const characters = JSON.parse(stringfyCharacters);
  const foundedCharacter = characters.find((char) => Number(char.id) === id);

  if (foundedCharacter) return foundedCharacter;
  return new Error('id não encontrado');
};

const showCharacter = async () => {
  const character = await findCharacter(1);
  console.log(character);
};

showCharacter();

module.exports = { findCharacter };
