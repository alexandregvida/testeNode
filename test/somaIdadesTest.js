var assert = require('assert');
var somaIdades = require('../src/somaIdades.js');

describe('Soma Idades', function() {
  describe('Mensagem Correta ?', function() {
    it('Soma Idades', function() {
      assert.equal(somaIdades(10,45), 55);
    });
  });
});