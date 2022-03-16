const { getSimpsons } = require('../model/simpsonsModel');

const parseJSON = (str) => JSON.parse(str);

const listAll = async () => {
  try {
    return parseJSON(await getSimpsons());
  } catch (err) {
    return { message: err.message };
  }
};

const findOne = async (id) => {
  try {
    const simpsons = parseJSON(await getSimpsons());
    return (
      simpsons.find((s) => s.id === id) || {
        message: 'Character does not exist!',
      }
    );
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = {
  listAll,
  findOne,
};
