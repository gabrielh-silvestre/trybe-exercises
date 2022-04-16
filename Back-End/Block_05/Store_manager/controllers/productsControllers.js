const { SUCCESS_CODES } = require('../helpers/codes');
const { ProductService } = require('../services/productsServices');

const findAll = async (_req, res, next) => {
  const { code, message, data } = await ProductService.findAll();

  if (data) {
    return res.status(SUCCESS_CODES[code]).json(data);
  }

  next({ code, message });
};

const findById = async (req, res, next) => {
  const { id } = req.params;
  const { code, message, data } = await ProductService.findById(id);

  if (data) {
    return res.status(SUCCESS_CODES[code]).json(data);
  }

  next({ code, message });
};

const create = async (req, res, next) => {
  const { name, quantity } = req.body;
  const { code, message, data } = await ProductService.create({
    name,
    quantity,
  });

  if (data) {
    return res.status(SUCCESS_CODES[code]).json(data);
  }

  next({ code, message });
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const { code, message, data } = await ProductService.update(id, {
    name,
    quantity,
  });

  if (data) {
    return res.status(SUCCESS_CODES[code]).json(data);
  }

  next({ code, message });
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  const { code, message, data } = await ProductService.remove(id);

  if (!message) {
    return res.status(SUCCESS_CODES[code]).json(data);
  }

  next({ code, message });
};

module.exports = {
  ProductController: {
    findAll,
    findById,
    create,
    update,
    remove,
  },
};
