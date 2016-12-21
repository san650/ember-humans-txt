var assert = require('assert');
var RSVP = require('rsvp');
var readFile = RSVP.denodeify(require('fs').readFile);
var AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

describe('Acceptance: humans.txt file generation', function() {
  this.timeout(300000);

  var app;

  before(function() {
    if (process.env.SKIP_ACCEPTANCE === 'true') {
      this.skip();
      return;
    }

    app = new AddonTestApp();

    return app.create('dummy', {
        fixturesPath: 'node-tests/acceptance/fixtures'
      }).then(function() {
        return app.runEmberCommand('generate', 'humans-txt');
      }).then(function() {
        return app.runEmberCommand('build');
      });
  });

  it('generates a humans.txt file', function() {
    return readFile(app.filePath('/dist/humans.txt'))
      .then(function(content) {
        assert.ok(content.indexOf('Santiago Ferreira (@san650 at Twitter and Github)') > -1);
      });
  });
});
