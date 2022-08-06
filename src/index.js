import buildTree from './treeBuilder.js';
import parseFile from './parser.js';
import { buildFullPath, readFile, fileType } from './utils.js';
import format from './formatters/index.js';

const findDifference = (filepath1, filepath2, type = 'stylish') => {
  const fileType1 = fileType(filepath1);
  const fileType2 = fileType(filepath2);
  const data1 = parseFile(fileType1, readFile(buildFullPath(filepath1)));
  const data2 = parseFile(fileType2, readFile(buildFullPath(filepath2)));
  const tree = buildTree(data1, data2);
  return format(type, tree);
};

export default findDifference;
