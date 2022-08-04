import buildTree from './treeBuilder.js';
import parseFile from './parser.js';
import { buildFullPath, readFile, fileExtension } from './utils.js';
import format from './formatters/index.js';

const findDifference = (filepath1, filepath2, type = 'stylish') => {
  const fileExtension1 = fileExtension(filepath1);
  const fileExtension2 = fileExtension(filepath2);
  const data1 = parseFile(fileExtension1, readFile(buildFullPath(filepath1)));
  const data2 = parseFile(fileExtension2, readFile(buildFullPath(filepath2)));
  const tree = buildTree(data1, data2);
  return format(type, tree);
};

export default findDifference;
