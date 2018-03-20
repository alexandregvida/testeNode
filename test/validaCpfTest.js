var assert = require('assert');
var assert = require('assert');
var validaCpf = require('../src/validaCpf.js');

describe('Cpf Valido', function() {
    it('Cpf Valido ', function() {
      assert.equal(validaCpf('100.441.586-96'), true);
    });
});