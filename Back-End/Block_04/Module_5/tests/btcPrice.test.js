const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
const { app: server } = require('../src/api');
const axios = require('axios').default;
const { btcMock } = require('./mocks/btcCurrency');

chai.use(chaiHttp);

describe('Test btc/price route', () => {
  let response;

  before(() => {
    sinon
      .stub(axios, 'get')
      .onCall(0)
      .returns(Promise.resolve({ data: btcMock }));
  });

  after(() => {
    axios.get.restore();
  });

  describe('Success fetch', () => {
    before(async () => {
      response = await chai
        .request(server)
        .get('/btc/price')
        .set('Authorization', '86567349784e');
    });

    it('should return status code 200', () => {
      expect(response).to.have.status(200);
    });

    it('should return a bitcoin currency object', () => {
      expect(response.body).to.deep.equal({ currency: btcMock });
    });
  });

  describe('Fail fetch', () => {
    before(async () => {
      response = await chai
        .request(server)
        .get('/btc/price')
        .set('Authorization', '');
    });

    describe('invalid token', () => {
      it('should return status code 401', () => {
        expect(response).to.have.status(401);
      });

      it('should return fail message "Invalid token"', () => {
        expect(response.body.message).to.equal('Invalid token');
      });
    });
  });
});
