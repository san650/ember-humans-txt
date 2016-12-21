# ember-humans-txt [![humans.txt](http://humanstxt.org/img/oficial-logos/humanstxt-isolated-blank.gif)](http://humanstxt.org/)
[![Build Status](https://travis-ci.org/san650/ember-humans-txt.svg?branch=master)](https://travis-ci.org/san650/ember-humans-txt)

This Ember addon helps you generate and mantain a [humans.txt](http://humanstxt.org) file for your website.

## Example

/config/humans.js

```js
module.exports = function humans() {
  return {
    team: 'Santiago Ferreira (@san650 at Twitter and Github)',

    thanks: [
      'EmberJS team for the great framework',
      'ember-cli team for such a great tool'
    ],

    site: [
      'Standards: HTML5, CSS3, ES2015',
      'Components: EmberJS, node',
      'Software: VIM, ember-cli'
    ],

    note: 'Give san650/ember-humans-txt a star on github!'
  };
}
```

generates...

```
/* TEAM */

Santiago Ferreira (@san650 at Twitter and Github)

/* THANKS */

EmberJS team for the great framework
ember-cli team for such a great tool

/* SITE */

Standards: HTML5, CSS3, ES2015
Components: EmberJS, node
Software: VIM, ember-cli

/* NOTE */

Give san650/ember-humans-txt a star on github!
```

and also links the `humans.txt` file in your `index.html`.

```html
<link rel="author" href="humans.txt">
```

See [humans.txt standard](http://humanstxt.org/Standard.html) for more information.

## API

* `team` is a string or array of team members.
* `thanks` is a string or array of people you'd like to thank.
* `site` is a string or array of technical specifications about your site.
* `note` is a string or array of things you'd like to mention.

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

## Thanks

Thanks to [humans-generator](https://github.com/haydenbleasel/humans-generator) project for the ideas.

## License

ember-humans-txt is licensed under the MIT license.

See [LICENSE](./LICENSE) for the full license text.
