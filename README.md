enforce-generators
=======
Module to enforce harmony generator support for applications even in older versions of node

Tested on node version 0.8, 0.10, and 0.11

This module is only meant to be used on the entry point of your application. Please do not use it
on internal modules.

Usage
----------
    npm install --save enforce-generators
    var enforce = require('enforce-generators');
    enforce('path/to/main/script');

**NOTE:**
>
> This module uses [gnode](https:/github.com/tootallnate/gnode) to transpile generator code to ES5 code for node version
 < 0.11.3
> This can cause large applications to slow-down considerably

> It's not recommended to use this in a small library as the dependency weight comes in at around
5MB due to the use of regenerator. It's better instead to inform your users of the requirements,
check for support, and exit if they don't have the needed generator support.
