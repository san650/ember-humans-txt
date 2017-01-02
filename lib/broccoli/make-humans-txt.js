'use strict';

var Plugin = require('broccoli-plugin');

module.exports = MakeHumansBroccoli;

MakeHumansBroccoli.prototype = Object.create(Plugin.prototype);
MakeHumansBroccoli.prototype.constructor = MakeHumansBroccoli;

function MakeHumansBroccoli(definition) {
  // We don't need any input node
  Plugin.call(this, []);

  this.definition = definition;
}

MakeHumansBroccoli.prototype.build = function() {
  var convertToText = require('../convert-to-text');
  var writeFileSync = require('fs').writeFileSync;
  var join = require('path').join;

  writeFileSync(
    join(this.outputPath, 'humans.txt'), convertToText(this.definition) + '\n');
};
