import buildTree from './treeBuilder.js';
import parseFile from './parser.js';
import buildFullPath from './path.js';
import format from './formatters/index.js';

const findDifference = (filepath1, filepath2, type = 'stylish') => {
  const tree = buildTree(parseFile(buildFullPath(filepath1)), parseFile(buildFullPath(filepath2)));
  return format(type, tree);
};

export default findDifference;
