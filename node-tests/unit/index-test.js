'use strict';

var assert = require('assert');
var index = require('../../index');

describe('Unit: index', function() {
  describe('contentFor()', function() {
    it('returns link tag when section is "head"', function() {
      assert.ok(index.contentFor('head').includes(
        '<link rel="author" href="humans.txt">'));
    });

    it('returns empty for other section', function() {
      assert.equal(index.contentFor('body'), null);
    });
  });
});
