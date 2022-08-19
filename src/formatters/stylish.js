import _ from 'lodash';

const makeGap = (depth, initialValue = 4) => ' '.repeat(initialValue * depth - 2);

const stringify = (data, depth) => {
  if (_.isPlainObject(data) === false) {
    return `${data}`;
  }
  if (data === null) {
    return null;
  }
  const body = Object
    .entries(data)
    .map(([key, value]) => `${makeGap(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);
  return ['{', ...body, `${makeGap(depth)}  }`].join('\n');
};

const formatTree = (initialTree) => {
  const iter = (tree, depth) => tree.map((node) => {
    const makeLine = (value, sign) => `${makeGap(depth)}${sign} ${node.key}: ${stringify(value, depth)}`;
    switch (node.type) {
      case 'add':
        return makeLine(node.val, '+');
      case 'remove':
        return makeLine(node.val, '-');
      case 'notUpdated':
        return makeLine(node.val, ' ');
      case 'updated':
        return `${makeLine(node.val1, '-')}\n${makeLine(node.val2, '+')}`;
      case 'nested':
        return `${makeGap(depth)}  ${node.key}: {\n${iter(node.children, depth + 1).join('\n')}\n${makeGap(depth)}  }`;
      default:
        throw new Error('This tree has problem. Please check the tree.');
    }
  });
  return `{\n${iter(initialTree, 1).join('\n')}\n}`;
};

export default formatTree;
