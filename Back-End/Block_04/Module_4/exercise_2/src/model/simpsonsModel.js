const fs = require('fs/promises');

const getSimpsons = async () => {
  try {
    const allSimpsons = await fs.readFile('./src/model/simpsons.json');
    return allSimpsons;
  } catch (err) {
    throw new Error('Failed to get all simpsons');
  }
};

const addSimpson = async (newData) => {
  try {
    await fs.writeFile('./src/model/simpsons.json', newData);
  } catch (err) {
    throw new Error('Failed to create new Simpson character');
  }
};

module.exports = {
  getSimpsons,
  addSimpson,
};
