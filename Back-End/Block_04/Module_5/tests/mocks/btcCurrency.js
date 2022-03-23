const btcMock = {
  time: {
    updated: 'Mar 23, 2022 17:43:00 UTC',
    updatedISO: '2022-03-23T17:43:00+00:00',
    updateduk: 'Mar 23, 2022 at 17:43 GMT',
  },
  disclaimer:
    'This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org',
  bpi: {
    USD: {
      code: 'USD',
      rate: '42,348.8900',
      description: 'United States Dollar',
      rate_float: 42348.89,
    },
    BTC: {
      code: 'BTC',
      rate: 1.0,
      description: 'Bitcoin',
      rate_float: '1',
    },
  },
};

module.exports = { btcMock };
