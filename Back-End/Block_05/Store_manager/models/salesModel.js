const { connection } = require('./connection');

const { serializeAllSales, serializeSale } = require('../helpers/serializers');

const findAll = async () => {
  const query = `
    SELECT SP.sale_id, S.date, SP.product_id, SP.quantity
    FROM StoreManager.sales_products AS SP
    INNER JOIN StoreManager.sales AS S
    ON SP.sale_id = S.id;
  `;
  const [sales] = await connection.execute(query);
  const serializedSales = sales.map(serializeAllSales);

  return serializedSales;
};

const findById = async (id) => {
  const query = `
    SELECT SP.sale_id, S.date, SP.product_id, SP.quantity
    FROM StoreManager.sales_products AS SP
    INNER JOIN StoreManager.sales AS S
    ON SP.sale_id = S.id
    WHERE SP.sale_id = ?;
  `;
  const [sale] = await connection.execute(query, [id]);

  if (sale.length === 0) return null;

  const serializedSale = sale.map(serializeSale);
  return serializedSale;
};

const hasStock = async (sales) => {
  const query = `
    SELECT quantity
    FROM StoreManager.products
    WHERE id = ?;
  `;

  return Promise.all(
    sales.map(async (sale) => {
      const [[{ quantity }]] = await connection.execute(query, [
        sale.productId,
      ]);
      return quantity >= sale.quantity;
    }),
  ).then((results) => results.every((result) => result === true));
};

const decreaseProductQuantity = async (sales) => {
  const query = `
    UPDATE StoreManager.products
    SET quantity = quantity - ?
    WHERE id = ?;
  `;

  sales.forEach(async (sale) => {
    await connection.execute(query, [sale.quantity, sale.productId]);
  });
};

const insertIntoSalesProducts = async (saleId, sales) => {
  const query = `
    INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?);
  `;

  sales.forEach(async (sale) => {
    await connection.execute(query, [saleId, sale.productId, sale.quantity]);
  });
};

const create = async (sales) => {
  const query = `
    INSERT INTO StoreManager.sales (date)
    VALUES (NOW());
  `;
  const [{ insertId }] = await connection.execute(query);

  await decreaseProductQuantity(sales);
  await insertIntoSalesProducts(insertId, sales);

  return {
    id: insertId,
    itemsSold: sales,
  };
};

const updateSalesProduct = async (id, sales) => {
  const query = `
    UPDATE StoreManager.sales_products
    SET quantity = ?
    WHERE sale_id = ? AND product_id = ?;
  `;

  sales.forEach(async (sale) => {
    await connection.execute(query, [sale.quantity, id, sale.productId]);
  });
};

const update = async (id, sales) => {
  const query = `
    UPDATE StoreManager.sales
    SET date = NOW()
    WHERE id = ?;
  `;
  await connection.execute(query, [id]);

  await updateSalesProduct(id, sales);

  return {
    saleId: id,
    itemUpdated: sales,
  };
};

const increaseProductQuantity = async (id) => {
  const increaseQuantity = await findById(id);

  const query = `
    UPDATE StoreManager.products
    SET quantity = quantity + ?
    WHERE id = ?;
  `;

  increaseQuantity.forEach(async (sale) => {
    await connection.execute(query, [sale.quantity, sale.productId]);
  });
};

const removeSalesProduct = async (id) => {
  const query = `
    DELETE FROM StoreManager.sales_products
    WHERE sale_id = ?;
  `;
  await connection.execute(query, [id]);
};

const remove = async (id) => {
  await increaseProductQuantity(id);
  await removeSalesProduct(id);

  const query = `
    DELETE FROM StoreManager.sales
    WHERE id = ?;
  `;
  await connection.execute(query, [id]);
};

module.exports = {
  SalesModel: {
    findAll,
    findById,
    create,
    update,
    remove,
    hasStock,
  },
};
