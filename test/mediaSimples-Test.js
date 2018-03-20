var assert = require('assert');
var mediaSimples = require('../src/mediaSimples.js');

describe('Media Simples', function() {
    it('Media Correta', function() {
      assert.equal(mediaSimples(10,20,30), 20);
    });
});
