const fs = require('fs/promises');

const substituteFamilyMember = async () => {
  try {
    const simpsonFamily = JSON.parse(
      await fs.readFile('simpsonFamily.json', 'utf8')
    );
    const attFamilly = simpsonFamily.map((char) =>
      char.name === 'Nelson Muntz' ? { id: '5', name: 'Maggie Simpson' } : char
    );

    await fs.writeFile('simpsonFamily.json', JSON.stringify(attFamilly));
  } catch (err) {
    return new Error(err);
  }
};

const verifySimpsonFamily = async () => {
  await substituteFamilyMember();

  const simpsonFamily = JSON.parse(
    await fs.readFile('simpsonFamily.json', 'utf8')
  );
  console.log(simpsonFamily);
};

verifySimpsonFamily();

module.exports = { substituteFamilyMember };
