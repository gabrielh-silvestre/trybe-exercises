const fs = require('fs/promises');

const inserCharacterIntoFamily = async () => {
  try {
    const characters = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));
    const simpsonFamily = JSON.parse(
      await fs.readFile('simpsonFamily.json', 'utf8')
    );
    const newFamily = [
      ...simpsonFamily,
      characters.find(({ name }) => name === 'Nelson Muntz'),
    ];

    await fs.writeFile('simpsonFamily.json', JSON.stringify(newFamily));
  } catch (err) {
    return new Error(err);
  }
};

const verifySimpsonFamily = async () => {
  await inserCharacterIntoFamily();

  const simpsonFamily = JSON.parse(
    await fs.readFile('simpsonFamily.json', 'utf8')
  );
  console.log(simpsonFamily);
};

verifySimpsonFamily();

module.exports = { inserCharacterIntoFamily };
