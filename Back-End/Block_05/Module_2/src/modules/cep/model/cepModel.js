const { connection } = require('../../../connection');

const findAll = async () => {
  const [foundedCeps] = await connection.execute(
    'SELECT * FROM ceps'
  );

  return foundedCeps;
};

const findOne = async (cep) => {
  const [foundedCep] = await connection.execute(
    'SELECT * FROM ceps WHERE cep = ?',
    [cep]
  );

  return foundedCep;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf]
  );
};

module.exports = {
  cepModel: {
    findAll,
    findOne,
    create,
  },
};
