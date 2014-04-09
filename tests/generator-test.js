'use strict';

var assert = require('assert');

try {
  eval('(function* () {})()'); // jshint ignore:line
  assert.equal(true, true);
  console.log('Success');
  module.exports = true;
} catch (e) {
  assert.equal(true, false);
  module.exports = false;
}
