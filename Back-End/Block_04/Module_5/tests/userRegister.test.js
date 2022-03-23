// const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
const { app: server } = require('../src/api');

chai.use(chaiHttp);

describe('Test user/register route', () => {
  let response;

  describe('Success register', () => {
    before(async () => {
      response = await chai.request(server).post('/user/register').send({
        email: 'gabriel@gabriel.com',
        password: '123456',
        username: 'gabriel',
      });
    });

    it('should return status code 201', () => {
      expect(response).to.have.status(201);
    });

    it('should return success message', () => {
      expect(response.body.message).to.equal('User created');
    });
  });

  describe('Fail register', () => {
    describe('Email key should exist', () => {
      before(async () => {
        response = await chai.request(server).post('/user/register').send({
          password: '123456',
          username: 'gabriel',
        });
      });

      it('should return status code 400', () => {
        expect(response).to.have.status(400);
      });

      it('should return fail message', () => {
        expect(response.body.message).to.equal('Invalid data');
      });
    });

    describe('Email should have "email@email.com" format', () => {
      before(async () => {
        response = await chai.request(server).post('/user/register').send({
          email: 'gabrielgabriel.com',
          password: '123456',
          username: 'gabriel',
        });
      });

      it('should return status code 400', () => {
        expect(response).to.have.status(400);
      });

      it('should return fail message', () => {
        expect(response.body.message).to.equal('Invalid email');
      });
    });

    describe('Password key should exist', () => {
      before(async () => {
        response = await chai.request(server).post('/user/register').send({
          email: 'gabrielgabriel.com',
          username: 'gabriel',
        });
      });

      it('should return status code 400', () => {
        expect(response).to.have.status(400);
      });

      it('should return fail message', () => {
        expect(response.body.message).to.equal('Invalid data');
      });
    });

    describe('Passsword should have more than 4 characters and less than 8', () => {
      before(async () => {
        response = await chai.request(server).post('/user/register').send({
          email: 'gabrielgabriel.com',
          password: '123',
          username: 'gabriel',
        });
      });

      it('should return status code 400', () => {
        expect(response).to.have.status(400);
      });

      it('should return fail message', () => {
        expect(response.body.message).to.equal('Invalid password');
      });
    });

    describe('Username key should exist', () => {
      before(async () => {
        response = await chai.request(server).post('/user/register').send({
          email: 'gabrielgabriel.com',
          password: '1234',
        });
      });

      it('should return status code 400', () => {
        expect(response).to.have.status(400);
      });

      it('should return fail message', () => {
        expect(response.body.message).to.equal('Invalid data');
      });
    });

    describe('Username should have more than 3 characters', () => {
      before(async () => {
        response = await chai.request(server).post('/user/register').send({
          email: 'gabriel@gabriel.com',
          password: '1234',
          username: 'ga',
        });
      });

      it('should return status code 400', () => {
        expect(response).to.have.status(400);
      });

      it('should return fail message', () => {
        expect(response.body.message).to.equal('Invalid username');
      });
    });
  });
});
