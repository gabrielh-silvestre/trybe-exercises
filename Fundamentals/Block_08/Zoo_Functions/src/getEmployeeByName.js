const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  return !employeeName
    ? {}
    : employees
      .filter((employee) => employee.firstName === employeeName
      || employee.lastName === employeeName)[0];
}

module.exports = getEmployeeByName;
