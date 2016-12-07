/*jshint node:true*/
'use strict';

module.exports = humans;

function humans() {
  // See http://humanstxt.org/Standard.html for more information about
  // humans.txt format

  var team = [
    {
      name: 'Santiago Ferreira',
      title: 'developer',
      site: 'san650@gmail.com',
      twitter: 'san650'
    }
  ];

  var thanks = [
    'https://www.meetup.com/ember-montevideo'
  ];

  var site = {
    standards: 'HTML5, CSS3, ES2015',
    components: [
      'EmberJS',
      'jQuery'
    ],
    software: [
      'VIM'
    ]
  };

  return {
    team: team,
    thanks: thanks,
    site: site
  };
}
