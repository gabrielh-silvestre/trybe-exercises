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

const findAll = async () => {
  const [users] = await connection.execute('SELECT * FROM Users');

  return users;
};

const findByEmail = async (email) => {
  const [user] = await connection.execute(
    'SELECT * FROM Users WHERE email = ?',
    [email]
  );

  return user;
};

const findById = async (id) => {
  const [user] = await connection.execute(
    'SELECT * FROM Users WHERE id = ?',
    [id]
  );

  return user;
};

const update = async (userToUpdate) => {
  const { id, firstName, lastName, email, password } = userToUpdate;

  await connection.execute(
    'UPDATE Users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id]
  );
}

module.exports = {
  userRepository: {
    create,
    update,
    findAll,
    findByEmail,
    findById,
  },
};
