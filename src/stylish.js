import _ from 'lodash';

const gapMaker = (depth, initialValue = 4) => ' '.repeat(initialValue * depth - 2);

const digger = (data, depth) => {
    if (_.isPlainObject(data) === false) {
      return `${data}`;
    }
    if (data === null) { 
        return null; 
    }
    const body = Object
     .entries(data)
     .map(([key, value]) => `${gapMaker(depth + 1)}  ${key}: ${digger(value, depth + 1)}`);
    return ['{', ...body, `${gapMaker(depth)}  }`,].join('\n');
  };

export const formatter = (obj) => {
    const iter = (tree, depth) => tree.map((node) => {
    const takeValue = (value, sign) => `${gapMaker(depth)}${sign} ${node.key}: ${digger(value, depth)}\n`;
    switch (node.type) {
        case 'add':
          return takeValue(node.val, '+');
        case 'remove':
          return takeValue(node.val, '-');
        case 'same':
          return takeValue(node.val, ' ');
        case 'updated':
          return `${takeValue(node.val1, '-')}${takeValue(node.val2, '+')}`;
        case 'recursion':
          return `${gapMaker(depth)}  ${node.key}: {\n${iter(node.children, depth + 1).join('')} ${gapMaker(depth)}}`;
        }
    });
    return `{\n${iter(obj, 1).join('')}}`;
  };