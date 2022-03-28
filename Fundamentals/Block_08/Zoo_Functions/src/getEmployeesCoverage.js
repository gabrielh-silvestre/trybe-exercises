const data = require('../data/zoo_data');

const { species, employees } = data;

const employeeConstructor = ({ id, firstName, lastName }, { animals, locations }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: animals,
  locations,
});

const searchEmployee = (searchTerm) => employees
  .find(({ firstName, lastName, id }) => [firstName, lastName, id].includes(searchTerm));

const getResponsibleSpecies = ({ responsibleFor }) => species
  .filter((specie) => responsibleFor.includes(specie.id));

const animalResponsibleConstructor = (responsibleAnimals) => ({
  animals: responsibleAnimals.map((animal) => animal.name),
  locations: responsibleAnimals.map((animal) => animal.location),
});

const finalConstructor = (employee) => {
  const responsibleAnimal = getResponsibleSpecies(employee);
  const employeeAnimal = animalResponsibleConstructor(responsibleAnimal);

  return employeeConstructor(employee, employeeAnimal);
};

function getEmployeesCoverage(searchTerm) {
  if (!searchTerm) {
    return employees.map((employee) => finalConstructor(employee));
  }

  const rightEmployee = searchEmployee(searchTerm.name || searchTerm.id);

  if (!rightEmployee) {
    throw new Error('Informações inválidas');
  }

  return finalConstructor(rightEmployee);
}

module.exports = getEmployeesCoverage;
