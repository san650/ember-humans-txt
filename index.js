/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-humans-txt',

  contentFor(section) {
    if (section === 'head') {
      return '<link rel="author" href="humans.txt">';
    }
  }
};
