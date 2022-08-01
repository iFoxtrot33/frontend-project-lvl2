import buildTree from './treeBuilder.js';
import parseFile from './parser.js';
import { buildFullPath, readFile } from './path.js';
import format from './formatters/index.js';

const findDifference = (filepath1, filepath2, type = 'stylish') => {
  const tree = buildTree(
    parseFile(filepath1, readFile(buildFullPath(filepath1))),
    parseFile(filepath2, readFile(buildFullPath(filepath2))),
  );
  return format(type, tree);
};

export default findDifference;
