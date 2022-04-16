const { connection } = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products ORDER BY id',
  );
  return products;
};

const findById = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return product.length > 0 ? product[0] : null;
};

const findByName = async (name) => {
  const [products] = await connection.execute(
    'SELECT * FROM products WHERE name = ?',
    [name],
  );

  return products.length > 0 ? products[0] : null;
};

const create = async ({ name, quantity }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name, quantity) VALUES (?, ?)',
    [name, quantity],
  );

  return {
    id: insertId,
    name,
    quantity,
  };
};

const update = async ({ id, name, quantity }) => {
  await connection.execute(
    'UPDATE products SET name = ?, quantity = ? WHERE id = ?',
    [name, quantity, id],
  );

  return {
    id,
    name,
    quantity,
  };
};

const remove = async (id) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [id],
  );
};

module.exports = {
  ProductModel: {
    findAll,
    findById,
    findByName,
    create,
    update,
    remove,
  },
};
