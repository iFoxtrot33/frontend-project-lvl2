#!/usr/bin/env node
import { program } from "./../node_modules/commander/index.js";
import  findDiff   from "./../src/index.js"
import { parseFile } from "./../src/parser.js"
import { formatter} from "./../src/stylish.js"
import { formatPlain } from "./../src/formatters/plain.js"

program
 .name('gendiff')
 .description('Compares two configuration files and shows a difference.')
 .version('0.0.1')
 .option('-f, --format <type>', 'output format')
 .arguments('<formatName> <filepath1> <filepath2>')
 .action((format, filepath1, filepath2) => {
  if (format === 'plain') {
  // eslint-disable-next-line no-undef
  console.log(formatPlain(findDiff(parseFile(filepath1), parseFile(filepath2))));
  } else if (format === 'tree') {
  // eslint-disable-next-line no-undef
  console.log(formatter(findDiff(parseFile(filepath1), parseFile(filepath2))))
  } else if (format === "json") {
    // eslint-disable-next-line no-undef
    console.log(JSON.stringify(findDiff(parseFile(filepath1), parseFile(filepath2))))
  }
 });
// eslint-disable-next-line no-undef
program.parse();

export default program;
