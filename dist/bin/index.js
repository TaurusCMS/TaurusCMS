#! /usr/bin/env node

'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userArgs = process.argv.slice(2);
var output = '';
if (userArgs.length === 0) {
  output = 'Usage: taurus <command>\nwhere <command> is one of:\n  create';
} else {
  var command = userArgs[0];
  var params = userArgs.slice(1, userArgs.length);
}