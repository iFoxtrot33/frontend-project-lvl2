import _ from 'lodash';

const isComplex = (val) => {
  if (_.isPlainObject(val) === true) {
    return '[complex value]';
  }
  if ((val === true) || (val === false) || (val === null) || (typeof val === 'number')) {
    return val;
  }
  return `'${val}'`;
};

const formatPlain = (obj) => {
  const iter = (tree, parent) => tree.map((node) => {
    const path = [...parent, node.key].join('.');
    switch (node.type) {
      case 'add':
        return `Property '${path}' was added with value: ${isComplex(node.val)}\n`;
      case 'remove':
        return `Property '${path}' was removed\n`;
      case 'updated':
        return `Property '${path}' was updated. From ${isComplex(node.val1)} to ${isComplex(node.val2)}\n`;
      case 'nested':
        return `${iter(node.children, [path]).join('')}`;
      case 'notUpdated':
        return '';
      default:
        throw new Error('This tree has problem. Please check the tree.');
    }
  });
  const result = `${iter(obj, []).join('')}`;
  const finalResult = result.split('');
  const answer = finalResult.filter((element, index) => {
    if (index < finalResult.length - 1) {
      return element;
    }
    return '';
  }, []);
  return answer.join('');
};

export default formatPlain;
