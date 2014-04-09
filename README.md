GenForce
=======
Module to enforce harmony generator support for applications even in older versions of node

Tested on Node 0.8, 0.10, & 0.11

This module is only meant to be used on the entry point of your application. Please do not use it
on internal modules.

This module uses [gnode][1] under the hood to provide generator support for versions of
node < 0.11.3. This can cause slowdowns due to transpiling of the modules when they are required.

To use generators in the current stable node for production you can use [traceur][2] or
[regenerator][3] to compile your applications to ECMAScript 5 and then use gnode directly to
require any module dependencies that are using generators internally such as koa or co.

Usage
----------
    npm install --save genforce

    var genforce = require('genforce');
    genforce('path/to/main/script');

**NOTE:**

> It's not recommended to use this in a small library as the dependency weight comes in at around
5MB due to the use of regenerator. It's better instead to inform your users of the requirements,
check for support, and exit if they don't have the needed generator support.


  [1]: https://github.com/TooTallNate/gnode
  [2]: https://github.com/google/traceur-compiler
  [3]: https://github.com/facebook/regenerator
