const fs = require('fs/promises');

const createSimpsonFamily = async () => {
  try {
    const characters = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));
    const simpsonFamily = characters.filter(({ id }) =>
      [1, 2, 3, 4].includes(Number(id))
    );

    await fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonFamily));
  } catch (err) {
    return new Error(err);
  }
};

const verifySimpsonFamily = async () => {
  await createSimpsonFamily();

  const characters = JSON.parse(
    await fs.readFile('simpsonFamily.json', 'utf8')
  );
  console.log(characters);
};

verifySimpsonFamily();

module.exports = { createSimpsonFamily };
