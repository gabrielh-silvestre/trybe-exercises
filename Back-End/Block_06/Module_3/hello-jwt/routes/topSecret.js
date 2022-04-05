const express = require('express');
const { revelTopSecret } = require('../controllers/topSecret');
const {
  validAuthorization,
  validAdmin,
} = require('../middlewares/validation/topSecret');

const topSecretRouter = express.Router();

topSecretRouter.get('/', validAuthorization, validAdmin, revelTopSecret);

module.exports = {
  topSecretRouter,
};
