/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-humans-txt',

  included: function(app) {
    this.app = app;
    app.options = app.options || {};

    this._super.included(app);
  },

  contentFor(section) {
    if (section === 'head') {
      return '<link rel="author" href="humans.txt">';
    }
  },

  treeFor(name) {
    if (name === 'public') {
      var MakeHumansTXT = require('./lib/broccoli/make-humans-txt');
      var humans = this._getHumansConfig();

      return new MakeHumansTXT(humans);
    }
  },

  _getHumansConfig() {
    var path = require('path');
    var humans;

    try {
      humans = require(path.join(this.app.project.root, 'config/humans.js'))();
    } catch(e) {
      humans = {};
    }

    return humans;
  }
};
