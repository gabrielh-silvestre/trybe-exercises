const { fetchCurrency } = require('../services/btcServices');

const getCurrency = async (_req, res) => {
  const { currency, message } = await fetchCurrency();

  if (message) {
    return res.status(400).json({ message });
  }

  return res.status(200).json({ currency });
};

module.exports = {
  getCurrency,
};
