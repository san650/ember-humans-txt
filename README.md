# ember-humans-txt
[![Build Status](https://travis-ci.org/san650/ember-humans-txt.svg?branch=master)](https://travis-ci.org/san650/ember-humans-txt)

**This ember addon is a work in progress**

This Ember addon helps you generate and mantain a [humans.txt](http://humanstxt.org) file for your website.

## Example

/config/humans.js

```js
module.exports = function humans() {
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
      'VIM',
      'ember-cli'
    ]
  };

  return {
    team: team,
    thanks: thanks,
    site: site
  };
}
```

generates...

```
/* TEAM */

Developer: Santiago Ferreira
Site: san650@gmail.com
Twitter: @san650

/* THANKS */
Name: https://www.meetup.com/ember-montevideo

/* SITE */
Last update: 2016/12/07
Standards: HTML5, CSS3, ES2015
Components: EmberJS, jQuery
Software: VIM, ember-cli
```

and also links the `humans.txt` file in your `index.html`.

```html
<link rel="author" href="humans.txt">
```

See [humans.txt standard](http://humanstxt.org/Standard.html) for more information.

## Installation

```sh
$ ember install ember-humans-txt
```

This generates a config/humans.js configuration file.

## Development

```sh
$ git clone https://github.com/san650/ember-humans-txt.git
$ cd $_
$ yarn          # (or npm install)
$ bower install
```

Running tests

```sh
$ npm test
```

## Project's health

[![Build Status](https://travis-ci.org/san650/ember-humans-txt.svg?branch=master)](https://travis-ci.org/san650/ember-humans-txt)

## License

ember-humans-txt is licensed under the MIT license.

See [LICENSE](./LICENSE) for the full license text.
