#!/usr/bin/env node
import { program } from "./../node_modules/commander/esm.mjs";
import { findDiff  } from "./../index.js"

program
 .name('gendiff')
 .description('Compares two configuration files and shows a difference.')
 .version('0.0.1')
 .option('-f, --format <type>', 'output format')
 .arguments('<filepath1> <filepath2>')
 .action((filepath1, filepath2) => {
  // eslint-disable-next-line no-undef
  console.log(findDiff(filepath1, filepath2));
 });
// eslint-disable-next-line no-undef
program.parse();
