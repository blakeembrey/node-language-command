var fs        = require('fs');
var command   = require('../');
var exec      = require('child_process').exec;
var path      = require('path');
var assert    = require('assert');
var languages = fs.readdirSync(path.join(__dirname, 'fixtures'));

describe('language command', function () {
  describe('langauges', function () {
    // There are some really slow language out there :/
    this.timeout(5000);

    languages.forEach(function (language) {
      var lang = path.basename(language).split('.')[0].replace('_', ' ');
      var file = path.join(__dirname, 'fixtures', language);
      var cmd  = command(lang, file);

      it(lang, function (done) {
        return exec(cmd, function (err, stdout, stderr) {
          assert.equal(stdout, 'Hello, world!\n');

          return done(err);
        });
      });
    });

  });

  describe('unknown languages', function () {
    it('should return undefined', function () {
      assert.equal(command('Madeup', 'Madeup.madeup'), null);
    });
  });
});
