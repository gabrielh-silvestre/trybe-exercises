const { SalesModel } = require('../models/salesModel');

const findAll = async () => {
  try {
    const sales = await SalesModel.findAll();
    return { code: 'success', data: sales };
  } catch (err) {
    return { code: 'internalError', message: err.message };
  }
};

const findById = async (id) => {
  try {
    const sale = await SalesModel.findById(id);

    if (!sale) {
      return { code: 'notFound', message: 'Sale not found' };
    }

    return { code: 'success', data: sale };
  } catch (err) {
    return { code: 'internalError', message: err.message };
  }
};

const create = async (sales) => {
  try {
    const hasStock = await SalesModel.hasStock(sales);

    if (!hasStock) {
      return {
        code: 'unprocessable',
        message: 'Such amount is not permitted to sell',
      };
    }

    const newSale = await SalesModel.create(sales);
    return { code: 'successInsert', data: newSale };
  } catch (err) {
    return { code: 'internalError', message: err.message };
  }
};

const update = async ({ id, productId, quantity }) => {
  try {
    const saleExists = await SalesModel.findById(id);
    const sale = await SalesModel.update(id, [{ productId, quantity }]);

    if (!saleExists) {
      return { code: 'notFound', message: 'Sale not found' };
    }

    return { code: 'success', data: sale };
  } catch (err) {
    return { code: 'internalError', message: err.message };
  }
};

const remove = async (id) => {
  try {
    const saleExists = await SalesModel.findById(id);

    if (!saleExists) {
      return { code: 'notFound', message: 'Sale not found' };
    }

    await SalesModel.remove(id);

    return { code: 'successDelete', data: null };
  } catch (err) {
    return { code: 'internalError', message: err.message };
  }
};

module.exports = {
  SalesServices: {
    findAll,
    findById,
    create,
    update,
    remove,
  },
};
