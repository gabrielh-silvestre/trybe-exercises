const fs = require('fs/promises');

const READ_ERROR = 'Can\'t read talker.json';

const parse = (value) => JSON.parse(value);
const stringfy = (value) => JSON.stringify(value);

const readTalkerJSON = async () => {
  try {
    return parse(await fs.readFile('talker.json'));
  } catch (err) {
    console.log(err);
    return null;
  }
};

const returnAllTalkers = async () => {
  const allTalkers = await readTalkerJSON();

  if (allTalkers) return allTalkers;

  throw new Error(READ_ERROR);
};

const returnOneTalker = async (id) => {
  const allTalkers = await readTalkerJSON();

  if (!allTalkers) throw new Error(READ_ERROR);

  const talker = allTalkers.find((t) => t.id === id);

  return talker || null;
};

const returnTalkerByTerm = async (term) => {
  const allTalkers = await readTalkerJSON();
  if (!allTalkers) throw new Error(READ_ERROR);

  const filteredTalkers = allTalkers.filter((t) => t.name.includes(term));

  return filteredTalkers;
};

const addNewTalker = async (talker) => {
  const allTalkers = await readTalkerJSON();
  if (!allTalkers) throw new Error(READ_ERROR);

  const newTalker = {
    ...talker,
    id: allTalkers.length + 1,
  };

  try {
    await fs.writeFile('talker.json', stringfy([...allTalkers, newTalker]));
    return newTalker;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const editTalker = async (id, talker) => {
  const allTalkers = await readTalkerJSON();
  if (!allTalkers) throw new Error(READ_ERROR);

  const findedTalker = allTalkers.find((t) => t.id === id);
  if (!findedTalker) throw new Error('Can\'t find talker');

  const newTalker = {
    ...talker,
    id,
  };

  try {
    await fs.writeFile('talker.json', stringfy([...allTalkers, newTalker]));
    return newTalker;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteTalker = async (id) => {
  const allTalkers = await readTalkerJSON();
  if (!allTalkers) throw new Error(READ_ERROR);

  const attTalkers = allTalkers.filter((t) => t.id !== id);

  try {
    await fs.writeFile('talker.json', stringfy([attTalkers]));
    return true;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  returnAllTalkers,
  returnOneTalker,
  returnTalkerByTerm,
  addNewTalker,
  editTalker,
  deleteTalker,
};
