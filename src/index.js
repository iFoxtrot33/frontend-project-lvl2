import { formatter} from "./stylish.js"
import { formatPlain } from "./formatters/plain.js"
import  buildTree  from "./treeBuilder.js"
import { parseFile } from './parser.js'

const findDifference = (format, filepath1, filepath2) => {
  const tree = buildTree(parseFile(filepath1), parseFile(filepath2));
  switch(format) {
    case 'stylish':
      return formatter(tree);
    case 'plain':
      return formatPlain(tree);
    case 'json':
      return JSON.stringify(tree);
  }
};

export default findDifference;