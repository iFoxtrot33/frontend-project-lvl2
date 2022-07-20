#!/usr/bin/env node
import  findDifference  from "./../src/index.js"
import { program } from 'commander'

program
 .name('gendiff')
 .description('Compares two configuration files and shows a difference.')
 .version('0.0.1')
 .option('-f, --format <type>', 'output format')
 .arguments('<formatName> <filepath1> <filepath2>')
 .action((format, filepath1, filepath2) => {
  // eslint-disable-next-line no-undef
  console.log(findDifference(format, filepath1, filepath2))
 });

 program.parse();

export default program;