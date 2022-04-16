const { ProductModel } = require('../models/productsModel');

const findAll = async () => {
  try {
    const products = await ProductModel.findAll();
    return { code: 'success', data: products };
  } catch (err) {
    return { code: 'internalError', message: err.message };
  }
};

const findById = async (id) => {
  try {
    const product = await ProductModel.findById(id);

    if (!product) {
      return { code: 'notFound', message: 'Product not found' };
    }

    return { code: 'success', data: product };
  } catch (err) {
    return { code: 'internalError', message: err.message };
  }
};

const create = async ({ name, quantity }) => {
  try {
    const productAlreadyExists = await ProductModel.findByName(name);

    if (productAlreadyExists) {
      return { code: 'conflict', message: 'Product already exists' };
    }

    const product = await ProductModel.create({ name, quantity });

    return { code: 'successInsert', data: product };
  } catch (err) {
    return { code: 'internalError', message: err.message };
  }
};

const update = async (id, { name, quantity }) => {
  try {
    const productExists = await ProductModel.findById(id);

    if (!productExists) {
      return { code: 'notFound', message: 'Product not found' };
    }

    const product = await ProductModel.update({ id, name, quantity });

    return { code: 'success', data: product };
  } catch (err) {
    return { code: 'internalError', message: err.message };
  }
};

const remove = async (id) => {
  try {
    const productExists = await ProductModel.findById(id);

    if (!productExists) {
      return { code: 'notFound', message: 'Product not found' };
    }
  
    await ProductModel.remove(id);
  
    return { code: 'successDelete', data: null };
  } catch (err) {
    return { code: 'internalError', message: err.message };
  }
};

module.exports = {
  ProductService: {
    findAll,
    findById,
    create,
    update,
    remove,
  },
};
