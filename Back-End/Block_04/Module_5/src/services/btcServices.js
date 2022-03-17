const axios = require('axios').default;

const fetchCurrency = async () => {
  try {
    const res = await axios.get(
      'https://api.coindesk.com/v1/bpi/currentprice/BTC.json)'
    );
    return { currency: res.data };
  } catch (err) {
    return { message: 'Error to get currency' };
  }
};

module.exports = {
  fetchCurrency,
};
