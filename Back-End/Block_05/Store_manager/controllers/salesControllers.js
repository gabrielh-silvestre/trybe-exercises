const { SalesServices } = require('../services/salesServices');
const { SUCCESS_CODES } = require('../helpers/codes');

const findAll = async (req, res, next) => {
  const { code, message, data } = await SalesServices.findAll();

  if (data) {
    return res.status(SUCCESS_CODES[code]).json(data);
  }

  next({ code, message });
};

const findById = async (req, res, next) => {
  const { id } = req.params;
  const { code, message, data } = await SalesServices.findById(id);

  if (data) {
    return res.status(SUCCESS_CODES[code]).json(data);
  }

  next({ code, message });
};

const create = async (req, res, next) => {
  const newSales = req.body;

  const { code, message, data } = await SalesServices.create(newSales);

  if (data) {
    return res.status(SUCCESS_CODES[code]).json(data);
  }

  next({ code, message });
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const [{ productId, quantity }] = req.body;
  const saleToUpdate = { id, productId, quantity };

  const { code, message, data } = await SalesServices.update(saleToUpdate);

  if (data) {
    return res.status(SUCCESS_CODES[code]).json(data);
  }

  next({ code, message });
};

const remove = async (req, res, next) => {
  const { id } = req.params;

  const { code, message } = await SalesServices.remove(id);

  if (!message) {
    return res.status(SUCCESS_CODES[code]).end();
  }

  next({ code, message });
};

module.exports = {
  SalesController: {
    findAll,
    findById,
    create,
    update,
    remove,
  },
};
