# Language Command

[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/node-language-command.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Gittip][gittip-image]][gittip-url]

Look up the command for executing a program in any language. Uses the programming language names from [language-map](https://github.com/blakeembrey/language-map/blob/master/languages.json) and will always generate a command that cleans up after itself (leaves no temporary files) when executed.

## Installation

```
npm install language-command --save
```

## Usage

```javascript
var command = require('language-command');

command('JavaScript', 'test.js', '"test"');
//=> "node test.js \"test\""
```

## Notes

* Windows support is likely non-existant. If anyone can help make the repository work across OSes, it'd be greatly appreciated.
* Should it be possible to set paths to executables?
* The test directory uses underscores instead of spaces because some command line compilers had trouble with spaces.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/language-command.svg?style=flat
[npm-url]: https://npmjs.org/package/language-command
[gittip-image]: https://img.shields.io/gittip/blakeembrey.svg?style=flat
[gittip-url]: https://www.gittip.com/blakeembrey
