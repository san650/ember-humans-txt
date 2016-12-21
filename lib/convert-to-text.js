'use strict';

module.exports = convertToText;

const sections = [
  'team',
  'thanks',
  'site',
  'note'
];

function convertToText(manifest) {
  return sections.reduce(function(text, section) {
    if (manifest[section]) {
      return text +
        (text.length > 0 ? '\n\n' : '') +
        '/* ' +
        section.toUpperCase() +
        ' */\n\n' +
        (Array.isArray(manifest[section]) ?
         manifest[section].join('\n') :
         manifest[section]);
    } else {
      return text;
    }
  }, '');
}
