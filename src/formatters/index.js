import formatTree from './stylish.js';
import formatPlain from './plain.js';

const format = (type, treeOfDifference) => {
  switch (type) {
    case 'stylish':
      return formatTree(treeOfDifference);
    case 'plain':
      return formatPlain(treeOfDifference);
    case 'json':
      return JSON.stringify(treeOfDifference);
    default:
      throw new Error(`${type} is wrong format type`);
  }
};

export default format;
