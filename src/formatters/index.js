import formatTree from './stylish.js';
import formatPlain from './plain.js';

const format = (type, tree) => {
  switch (type) {
    case 'stylish':
      return formatTree(tree);
    case 'plain':
      return formatPlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`${type} is wrong format type`);
  }
};

export default format;
