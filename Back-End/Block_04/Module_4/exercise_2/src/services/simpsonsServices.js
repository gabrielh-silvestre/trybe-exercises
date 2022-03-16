const { getSimpsons } = require("../model/simpsonsModel");

const parseJSON = (str) => JSON.parse(str);

const listAll = async () => {
  try {
    return parseJSON(await getSimpsons());
  } catch (err) {
    return { message: err.message }
  }
}

module.exports = {
  listAll,
}
