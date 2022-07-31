/* eslint-disable import/no-unresolved */
import formatter from './stylish.js';
import formatPlain from './plain.js';

const format = (type, tree) => {
  switch (type) {
    case 'stylish':
      return formatter(tree);
    case 'plain':
      return formatPlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error('Wrong format name');
  }
};

export default format;
