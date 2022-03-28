const data = require('../data/zoo_data');

const { species } = data;

const countByGender = (specieName, gender) => species.find((specie) => specie.name === specieName)
  .residents.filter((resident) => resident.sex === gender).length;

const speciesConstructor = () => species.reduce((acc, curr) => {
  acc[curr.name] = curr.residents.length;
  return acc;
}, {});

function countAnimals(animal) {
  if (!animal) return speciesConstructor();
  if (!animal.sex) return speciesConstructor()[animal.specie];

  return countByGender(animal.specie, animal.sex);
}

module.exports = countAnimals;
