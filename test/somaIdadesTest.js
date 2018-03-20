var assert = require('assert');
var somaIdades = require('../src/somaIdades.js');

describe('Soma Idades', function() {
    it('Soma Idades', function() {
      assert.equal(somaIdades(10,45), 55);
    });
});