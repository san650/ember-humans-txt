'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Blueprint: ember generate and destroy humans-txt', function() {
  setupTestHooks(this);

  it('humans-txt', function() {
    return emberNew().then(function() {
      return emberGenerateDestroy(['humans-txt', 'foo'], function(file) {
        expect(file('config/humans.js')).to.contain('function humans');
      });
    });
  });
});
