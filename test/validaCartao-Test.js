var assert = require('assert');
var validaCartao = require('../src/validaCartao.js');

describe('Valida Cartão de Credito', function() {
    it('Cartão Valido', function() {
      assert.equal(validaCartao('0916202289845882'), false);
    });
});