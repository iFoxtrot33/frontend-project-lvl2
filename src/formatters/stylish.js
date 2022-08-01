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

const formatter = (obj) => {
  const iter = (tree, depth) => tree.map((node) => {
    const takeValue = (value, sign) => `${makeGap(depth)}${sign} ${node.key}: ${digger(value, depth)}`;
    switch (node.type) {
      case 'add':
        return takeValue(node.val, '+');
      case 'remove':
        return takeValue(node.val, '-');
      case 'notUpdated':
        return takeValue(node.val, ' ');
      case 'updated':
        return `${takeValue(node.val1, '-')}\n${takeValue(node.val2, '+')}`;
      case 'nested':
        return `${makeGap(depth)}  ${node.key}: {\n${iter(node.children, depth + 1).join('\n')}\n${makeGap(depth)}  }`;
      default:
        throw new Error('This tree has problem. Please check the tree.');
    }
  });
  return `{\n${iter(obj, 1).join('\n')}\n}`;
};

export default formatter;
