#! /usr/bin/env node
import fs from 'fs';
import util from 'util';
let userArgs = process.argv.slice(2);
let output = '';
if(userArgs.length === 0) {
  output = `\
Usage: taurus <command>
where <command> is one of:
  create, delete`;
} else {
  let command = userArgs[0];
  let params = userArgs.slice(1, userArgs.length);
  console.log(command + ' ' + params);
}
