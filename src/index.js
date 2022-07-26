import buildTree from './treeBuilder.js';
import { parseFile, getTruePath } from './parser.js';
import choseFormatter from './formatter.js';

const findDifference = (filepath1, filepath2, format = 'stylish') => {
  const tree = buildTree(parseFile(getTruePath(filepath1)), parseFile(getTruePath(filepath2)));
  return choseFormatter(format, tree);
};

export default findDifference;
