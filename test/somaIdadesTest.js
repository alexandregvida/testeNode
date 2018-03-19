var assert = require('assert');
var greeter = require('../src/somaIdades.js');

describe('Soma Idades', function() {
  describe('Assert Message', function() {
    it('Soma Idades', function() {
      assert.equal(somaIdades(), 55);
    });
  });
});