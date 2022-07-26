import { formatter } from './formatters/stylish.js';
import { formatPlain } from './formatters/plain.js';

const choseFormatter = (format, tree) => {
  switch (format) {
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

export default choseFormatter;
