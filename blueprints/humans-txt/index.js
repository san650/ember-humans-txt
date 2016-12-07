/*jshint node:true*/
'use strict';

module.exports = {
  description: 'Generates a humans.js configuration file',

  // BUGFIX: the blueprint doesn't recive an entity name so we declare this
  // method so the `generate` command doesn't throw an error when using this
  // blueprint
  normalizeEntityName: function() {},
};
