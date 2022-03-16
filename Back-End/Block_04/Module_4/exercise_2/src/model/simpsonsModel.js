const fs = require('fs/promises');

const getSimpsons = async () => {
  try {
    const allSimpsons = await fs.readFile('./src/model/simpsons.json');
    return allSimpsons;
  } catch (err) {
    throw new Error('Failed to get all simpsons');
  }
};

module.exports = {
  getSimpsons,
};
