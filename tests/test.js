'use strict';

var assert = require('assert');
var genforce = require('../index');

var result = genforce('../tests/generator-test');

assert.equal(result, true);
