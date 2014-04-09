'use strict';

try {
  eval('(function* () {})()'); // jshint ignore:line
  module.exports = true;
} catch (e) {
  module.exports = false;
}
