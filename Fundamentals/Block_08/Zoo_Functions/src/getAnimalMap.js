const data = require('../data/zoo_data');

const { species } = data;

const zooLocations = Array.from(new Set(species.map((specie) => specie.location)));

const filterByLocation = (location) => species
  .filter((specie) => specie.location === location)
  .map((specie) => specie.name);

const getResidentsByGender = (animal, sort, gender) => {
  const filteredAnimals = species
    .filter((specie) => specie.name === animal)
    .flatMap(({ residents }) => residents
      .filter((resident) => resident.sex === gender)
      .map((filterResident) => filterResident.name));

  return sort
    ? { [animal]: filteredAnimals.sort() }
    : { [animal]: filteredAnimals };
};

const getResidentsName = (animal, sort) => {
  const residentAnimals = species
    .filter((specie) => specie.name === animal)
    .map(({ residents }) => residents.map((resident) => resident.name))[0];

  return sort
    ? { [animal]: residentAnimals.sort() }
    : { [animal]: residentAnimals };
};

const residentsConstructor = (location, callback, sort, sex) => filterByLocation(location)
  .reduce((acc, curr, i) => {
    acc[i] = callback(curr, sort, sex);
    return acc;
  }, []);

const zooConstructor = (...params) => zooLocations
  .reduce((acc, curr) => {
    const [constructors, getAnimals, sort, sex] = params;
    acc[curr] = constructors(curr, getAnimals, sort, sex);
    return acc;
  }, {});

function getAnimalMap(options) {
  if (!options) return zooConstructor(filterByLocation);
  if (options.includeNames && options.sex) {
    return zooConstructor(residentsConstructor, getResidentsByGender, options.sorted, options.sex);
  }
  if (options.includeNames) {
    return zooConstructor(residentsConstructor, getResidentsName, options.sorted);
  }
  return zooConstructor(filterByLocation);
}

module.exports = getAnimalMap;
