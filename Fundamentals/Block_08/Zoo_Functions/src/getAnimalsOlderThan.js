const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species
    .filter((specie) => specie.name === animal)
    .every(({ residents }) => residents.every((resident) => resident.age >= age));
}

module.exports = getAnimalsOlderThan;
