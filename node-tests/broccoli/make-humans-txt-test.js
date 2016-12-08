'use strict';

var testHelpers = require('broccoli-test-helpers');
var makeTestHelper = testHelpers.makeTestHelper;
var cleanupBuilders = testHelpers.cleanupBuilders;
var assert = require('assert');
var readFileSync = require('fs').readFileSync;
var path = require('path');

var MakeHumansTXT = require('../../lib/broccoli/make-humans-txt');

describe('Broccoli: MakeHumansTXT', function() {
  var MakeHumansTXTHelper = makeTestHelper({
    fixturePath: __dirname,

    subject: function(inputNode) {
      return new MakeHumansTXT(inputNode, {
        team: [
          { title: 'developer', name: 'Santiago' }
        ]
      });
    },
  });

  afterEach(function() {
    return cleanupBuilders();
  });

  it('generates humans.txt file', function() {
    return MakeHumansTXTHelper('fixtures')
      .then(function(result) {
        assert.deepEqual(result.files, ['humans.txt']);
        return path.join(result.directory, result.files[0]);
      })
      .then(readFileSync)
      .then(function(content) {
        assert.ok(content.indexOf('developer: Santiago') > -1);
      });
  });
});
