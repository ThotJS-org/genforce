'use strict';

var path = require('path');

// this module checks to see if generator syntax is supported
var supported = require('generator-supported');

var genforce = function genforce(filePath){
  // this is the main entry point to the application
  var mainPath = path.dirname(require.main.filename);

  // this is the main file for the application
  filePath = path.resolve(mainPath,  filePath);

  // if generators are supported we can simply require it and return
  if(supported){
    return require(filePath);
  }

  // we need to see if generators are available in the current version of node
  var version = process.version;
  var required = 'v0.11.3';

  var semver = require('semver');

  if(semver.lt(version, required)){
    require('gnode');
    return true;
  }

  // here we have node 0.11.3 or higher so we just need to turn on the harmony flag
  var spawn = require('child_process').spawn;

  // get the current arguments
  var args = process.argv;

  var cmd = 'node';

  // pop off the binary and the filepath
  args.shift();
  args.shift();

  // add the proper filepath to avoid the extra requires again
  args.unshift(filePath);
  args.unshift('--harmony');

  // set the io for the child thread
  var opts = {
    customFds: [ 0, 1, 2 ],
    stdio: 'inherit'
  };

  var child = spawn(cmd, args, opts);
  child.on('exit', onexit);

  return true;
};

function onexit(code, signal) {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code);
  }
}

// this is just to make sure they don't try to run the wrong file
if(require.main === module) {
  console.log('You can\'t run this script directly');
}

module.exports = genforce;
