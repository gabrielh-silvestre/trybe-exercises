const { connection } = require('../../../connection');

const findAllCeps = async () => {
  const [foundedCeps] = await connection.execute(
    'SELECT * FROM ceps'
  );

  return foundedCeps;
};

const findCep = async (cep) => {
  const [foundedCep] = await connection.execute(
    'SELECT * FROM ceps WHERE cep = ?',
    [cep]
  );

  return foundedCep;
};

module.exports = {
  cepModel: {
    findAllCeps,
    findCep,
  },
};
