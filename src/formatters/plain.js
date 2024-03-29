import _ from 'lodash';

const formatComplexValue = (val) => {
  if (_.isPlainObject(val) === true) {
    return '[complex value]';
  }
  if ((val === true) || (val === false) || (typeof val === 'number')) {
    return `${val}`;
  }
  if (typeof val === 'string') {
    return `'${val}'`;
  }
  return null;
};

const formatPlain = (treeOfDifference) => {
  const iter = (tree, parent) => {
    const result = tree.map((node) => {
      const path = [...parent, node.key].join('.');
      switch (node.type) {
        case 'add':
          return `Property '${path}' was added with value: ${formatComplexValue(node.val)}`;
        case 'remove':
          return `Property '${path}' was removed`;
        case 'updated':
          return `Property '${path}' was updated. From ${formatComplexValue(node.val1)} to ${formatComplexValue(node.val2)}`;
        case 'nested':
          return `${iter(node.children, [path])}`;
        case 'notUpdated':
          return null;
        default:
          throw new Error('This tree has problem. Please check the tree.');
      }
    });
    return _.compact(result).join('\n');
  };
  return iter(treeOfDifference, []);
};

export default formatPlain;
