#! /usr/bin/env node
'use strict';
import fs from 'fs';
import util from 'util';
let userArgs = process.argv.slice(2);
let output = '';
if(userArgs.length === 0) {
  output = `\
Usage: taurus <command>
where <command> is one of:
  create`;
} else {
  let command = userArgs[0];
  let params = userArgs.slice(1, userArgs.length);
}
