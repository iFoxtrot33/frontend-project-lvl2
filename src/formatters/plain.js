import _ from 'lodash';

const formatComplexValue = (val) => {
  if (_.isPlainObject(val) === true) {
    return '[complex value]';
  }
  if ((val === true) || (val === false) || (val === null) || (typeof val === 'number')) {
    return `${val}`;
  }
  return `'${val}'`;
};

const formatPlain = (obj) => {
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
    const finalResult = _.compact(result);
    return finalResult.join('\n');
  };
  return iter(obj, []);
};

export default formatPlain;
