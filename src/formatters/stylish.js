import _ from 'lodash';

const makeGap = (depth, initialValue = 4) => ' '.repeat(initialValue * depth - 2);

const digger = (data, depth) => {
  if (_.isPlainObject(data) === false) {
    return `${data}`;
  }
  if (data === null) {
    return null;
  }
  const body = Object
    .entries(data)
    .map(([key, value]) => `${makeGap(depth + 1)}  ${key}: ${digger(value, depth + 1)}`);
  return ['{', ...body, `${makeGap(depth)}  }`].join('\n');
};

// eslint-disable-next-line import/prefer-default-export
export const formatter = (obj) => {
  const iter = (tree, depth) => tree.map((node) => {
    const takeValue = (value, sign) => `${makeGap(depth)}${sign} ${node.key}: ${digger(value, depth)}\n`;
    switch (node.type) {
      case 'add':
        return takeValue(node.val, '+');
      case 'remove':
        return takeValue(node.val, '-');
      case 'notUpdated':
        return takeValue(node.val, ' ');
      case 'updated':
        return `${takeValue(node.val1, '-')}${takeValue(node.val2, '+')}`;
      case 'nested':
        return `${makeGap(depth)}  ${node.key}: {\n${iter(node.children, depth + 1).join('')} ${makeGap(depth)} }\n`;
      default:
        throw new Error('This tree has problem. Please check the tree.');
    }
  });
  return `{\n${iter(obj, 1).join('')}}`;
};
