var assert = require('assert');
var greeter = require('../src/greeter.js');

describe('Soma Mensagens', function() {
  describe('Assert Message', function() {
    it('Soma Idades', function() {
      assert.equal(somaIdades(), 55);
    });
  });
});