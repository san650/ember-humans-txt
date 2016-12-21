'use strict';

var assert = require('assert');
var convertToText = require('../../lib/convert-to-text');

describe('Unit: convertToText()', function() {
  describe('team section', function() {
    it('supports definning only one team member', function() {
      var manifest = {
        team: 'Neil Young (@Neilyoung on Twitter)'
      };

      assert.equal(convertToText(manifest), '/* TEAM */\n\nNeil Young (@Neilyoung on Twitter)');
    });

    it('supports definning multiple team member', function() {
      var manifest = {
        team: [
          'Neil Young (@Neilyoung on Twitter)',
          'Richie Furay (@RichieFuray on Twitter)'
        ]
      };

      assert.equal(convertToText(manifest), '/* TEAM */\n\nNeil Young (@Neilyoung on Twitter)\nRichie Furay (@RichieFuray on Twitter)');
    });
  });

  describe('thanks section', function() {
    it('supports definning only thank you', function() {
      var manifest = {
        thanks: 'Buffalo Springfield for the great music'
      };

      assert.equal(convertToText(manifest), '/* THANKS */\n\nBuffalo Springfield for the great music');
    });

    it('supports definning multiple thanks', function() {
      var manifest = {
        thanks: [
          'Buffalo Springfield for the great music',
          'Crosby, Stills, Nash & Young'
        ]
      };

      assert.equal(convertToText(manifest), '/* THANKS */\n\nBuffalo Springfield for the great music\nCrosby, Stills, Nash & Young');
    });
  });

  describe('site section', function() {
    it('supports definning only one site note', function() {
      var manifest = {
        site: 'Language: English'
      };

      assert.equal(convertToText(manifest), '/* SITE */\n\nLanguage: English');
    });

    it('supports definning multiple site notes', function() {
      var manifest = {
        site: [
          'Language: English',
          'Tools: VIM, ember-cli'
        ]
      };

      assert.equal(convertToText(manifest), '/* SITE */\n\nLanguage: English\nTools: VIM, ember-cli');
    });
  });

  describe('note section', function() {
    it('supports definning only one note', function() {
      var manifest = {
        note: 'Thanks for using this addon'
      };

      assert.equal(convertToText(manifest), '/* NOTE */\n\nThanks for using this addon');
    });

    it('supports definning multiple site notes', function() {
      var manifest = {
        note: [
          'Thanks for using this addon',
          'Star san650/ember-humans-txt on github!'
        ]
      };

      assert.equal(convertToText(manifest), '/* NOTE */\n\nThanks for using this addon\nStar san650/ember-humans-txt on github!');
    });
  });

  it('supports multiple sections', function() {
      var manifest = {
        team: 'Neil Young (@Neilyoung on Twitter)',
        note: 'Thanks for using this addon'
      };

      assert.equal(convertToText(manifest), '/* TEAM */\n\nNeil Young (@Neilyoung on Twitter)\n\n/* NOTE */\n\nThanks for using this addon');
  });
});
