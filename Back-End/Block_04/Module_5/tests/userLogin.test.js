const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
const { app: server } = require('../src/api');

chai.use(chaiHttp);

describe('Test user/login route', () => {
  let response;

  describe('Success login', () => {
    before(async () => {
      response = await chai.request(server).post('/user/login').send({
        email: 'gabriel@gabriel.com',
        password: '123456',
      });
    });

    it('should return status code 200', () => {
      expect(response).to.have.status(200);
    });

    it('should return a token with 12 or more characters', () => {
      expect(response.body.token).to.be.a('string');
      expect(response.body.token).to.have.length.greaterThanOrEqual(12);
    });
  });

  describe('Fail login', () => {
    describe('Email key should exist', () => {
      before(async () => {
        response = await chai.request(server).post('/user/login').send({
          password: '123456',
        });
      });

      it('should return status code 400', () => {
        expect(response).to.have.status(400);
      });

      it('should return fail message "Invalid email and passsword"', () => {
        expect(response.body.message).to.equal('Invalid email and passsword');
      });
    });

    describe('Email should have "email@email" format', () => {
      before(async () => {
        response = await chai.request(server).post('/user/login').send({
          email: 'gabrielgabriel.com',
          password: '123456',
        });
      });

      it('should return status code 400', () => {
        expect(response).to.have.status(400);
      });

      it('should return fail message "Invalid email"', () => {
        expect(response.body.message).to.equal('Invalid email');
      });
    });

    describe('Password key should exist', () => {
      before(async () => {
        response = await chai.request(server).post('/user/login').send({
          email: 'gabriel@gabriel.com',
        });
      });

      it('should return status code 400', () => {
        expect(response).to.have.status(400);
      });

      it('should return fail message "Invalid email and passsword"', () => {
        expect(response.body.message).to.equal('Invalid email and passsword');
      });
    });

    describe('Passsword should have more than 4 characters and less than 8', () => {
      before(async () => {
        response = await chai.request(server).post('/user/login').send({
          email: 'gabriel@gabriel.com',
          password: '123',
        });
      });

      it('should return status code 400', () => {
        expect(response).to.have.status(400);
      });

      it('should return fail message "Invalid passsword"', () => {
        expect(response.body.message).to.equal('Invalid passsword');
      });
    });
  });
});
