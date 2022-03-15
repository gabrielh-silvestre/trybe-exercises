const fs = require('fs/promises');
const { expect } = require('chai');
const sinon = require('sinon');

const { writeContent } = require('../exercise_4');

const SUCCESS_MSG = 'ok';

sinon.stub(fs, 'writeFile');

describe('Test writeContent', () => {
  it('1. Function should return "ok" when finish with success', async () => {
    try {
      const result = await writeContent('texto.txt', 'Olá mundo!');
      expect(result).to.be.equal(SUCCESS_MSG);
    } catch (err) {
      throw new Error(err);
    }
  });

  it('2. Function should return an error when not receive arguments', async () => {
    try {
      await writeContent();
    } catch (err) {
      expect(err.message).to.be.equal(
        'parâmetros "file" e "content" são obrigatórios'
      );
    }
  });

  it('3. Function should return an error when not receive a string on "file" argument', async () => {
    try {
      await writeContent(9, 'Olá mundo!');
    } catch (err) {
      expect(err.message).to.be.equal(
        'parâmetro "file" deve receber uma string'
      );
    }
  });
});
