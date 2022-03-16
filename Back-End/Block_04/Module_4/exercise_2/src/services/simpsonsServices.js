const { getSimpsons, addSimpson } = require('../model/simpsonsModel');

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

const createCharacter = async (id, name) => {
  try {
    const simpsons = parseJSON(await getSimpsons());

    if (simpsons.find((s) => s.id === id)) {
      return { message: 'id already exists', status: 409 };
    }

    await addSimpson(JSON.stringify([...simpsons, { id, name }]));
    return { status: 204 };
  } catch (err) {
    console.log('trem');
    return { message: err.message, status: 500 };
  }
};

module.exports = {
  listAll,
  findOne,
  createCharacter,
};
