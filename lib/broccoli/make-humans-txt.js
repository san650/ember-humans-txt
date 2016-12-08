/* jshint node: true */
'use strict';

var Plugin = require('broccoli-plugin');

module.exports = MakeHumansBroccoli;

MakeHumansBroccoli.prototype = Object.create(Plugin.prototype);
MakeHumansBroccoli.prototype.constructor = MakeHumansBroccoli;

function MakeHumansBroccoli(inputNode, definition) {
  Plugin.call(this, [inputNode]);

  this.definition = definition;
}

MakeHumansBroccoli.prototype.build = function() {
  var writeFileSync = require('fs').writeFileSync;
  var join = require('path').join;

  writeFileSync(
    join(this.outputPath, 'humans.txt'), transform(this.definition) + '\n');
};

function transform(definition) {
  if (definition.team && definition.team.length) {
    var user = definition.team[0];

    return [
      '/* TEAM */',
      user.title + ': ' + user.name
    ].join('\n');
  }

  return '';
}
