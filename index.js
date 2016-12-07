/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-humans-txt',

  contentFor(section) {
    if (section === 'head') {
      return '<link rel="author" href="humans.txt">';
    }
  },

  treeForPublic: function() {
    var path = require('path');
    var MakeHumansTXT = require('./lib/broccoli/make-humans-txt');
    var humans = require(path.join(
      this.app.project.root, './config/humans.js'));

    return new MakeHumansTXT('.', humans());
  }
};
