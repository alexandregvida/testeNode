var assert = require('assert');
var validaCpf = require('../src/validaCpf.js');

describe('Cpf Valido', function() {
  describe('Mensagem Correta ?', function() {
    it('Cpf Valido ', function() {
      assert.equal(validaCpf('100.441.586-96'), true);
    });
  });
});