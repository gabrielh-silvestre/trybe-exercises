const searchEmployee = require('./bonus');

describe('Test for bonus exercise', () => {
  
  const testEmployees = [
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ]

  it('Verify if searchEmployee is declared', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Verify if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Verify if searchEmployee return a existing employee by id', () => {
    expect(searchEmployee('9852-2-2')).not.toBeUndefined();
    expect(typeof searchEmployee('9852-2-2')).toBe('object');
  });

  it('Verify if searchEmployee return "IdD não identificada" if the id does not exist', () => {
    expect(searchEmployee('123')).toBe('ID não identificada');
  });

});
