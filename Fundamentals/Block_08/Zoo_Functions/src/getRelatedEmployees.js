const data = require('../data/zoo_data');

const { employees } = data;

const allManagers = () => {
  const allManager = [];
  employees
    .forEach((employee) => employee.managers
      .forEach((manager) => allManager.push(manager)));

  return allManager;
};

function isManager(id) {
  return allManagers().includes(id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return employees.filter((employee) => employee.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
