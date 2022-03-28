const data = require('../data/zoo_data');

const { species, employees } = data;

const getEmployeeAnimal = (responsible) => employees
  .find((employee) => employee.id === responsible)
  .responsibleFor[0];

const getOldestAnimal = (animalId) => species
  .find((specie) => specie.id === animalId)
  .residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));

function getOldestFromFirstSpecies(id) {
  const oldestAnimal = getOldestAnimal(getEmployeeAnimal(id));

  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
