#!/usr/bin/env node
import { Command } from "./../node_modules/commander/esm.mjs";
const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');
program.parse();
 
// eslint-disable-next-line no-undef
console.log(program);
