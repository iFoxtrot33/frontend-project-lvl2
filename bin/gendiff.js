#!/usr/bin/env node
import { program } from "./../node_modules/commander/esm.mjs";
import fs from 'fs';
import findDiff from "./../index.js"
const gendiff = (path1, path2) => findDiff(path1.toString(), path2.toString());

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')

  .option('-f, --format <type>', 'output format')
// eslint-disable-next-line no-undef
program.parse(process.argv);
 
// eslint-disable-next-line no-undef
