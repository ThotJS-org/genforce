'use strict';

var genforce = require('../index');
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

suite.add('genforceTest', function genforceTest(){
  genforce('./generator-test');
});

suite.add('requireTest', function requireTest(){
  require('./generator-test');
});

suite.on('cycle', function(event) {
  console.log(String(event.target));
});

suite.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  console.log('Slowest is ' + this.filter('slowest').pluck('name'));
  this.map(function(item){
    console.log(item.name + ' Average Time :' + item.stats.mean);
  });
});

// run async
suite.run({ 'async': false });