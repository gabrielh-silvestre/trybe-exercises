const fs = require('fs/promises');

const removeCharacter = async () => {
  try {
    const characters = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));
    const attCharacters = characters.filter(({ id }) => id !== '10' && id !== '6');

    await fs.writeFile('simpsons.json', JSON.stringify(attCharacters));
  } catch (err) {
    return new Error(err);
  }
};

const verifyCharacters = async () => {
  try {
    await removeCharacter();
    const characters = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));

    console.log(characters);
    return characters;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

verifyCharacters();

module.exports = { removeCharacter };
