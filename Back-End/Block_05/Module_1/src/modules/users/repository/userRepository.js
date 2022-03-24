const { connection } = require('../../../connection');

const create = async (newUser) => {
  const { firstName, lastName, email, password } = newUser;

  const [{ insertId }] = await connection.execute(
    'INSERT INTO Users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );

  const createdUser = { id: insertId, ...newUser };

  return createdUser;
};

const findByEmail = async (email) => {
  const [user] = await connection.execute(
    'SELECT * FROM Users WHERE email = ?',
    [email]
  );

  return user;
};

module.exports = {
  userRepository: {
    create,
    findByEmail,
  },
};
