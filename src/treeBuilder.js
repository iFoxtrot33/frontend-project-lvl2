import _ from 'lodash';

const buildTree = (file1, file2) => {
  const keyss = Object.keys({ ...file1, ...file2 });
  const sortedKeys = _.sortBy(keyss);
  const tree = sortedKeys.map((key) => {
    if (!_.has(file1, key)) {
      return { type: 'add', key, val: file2[key] };
    }
    if (!_.has(file2, key)) {
      return { type: 'remove', key, val: file1[key] };
    }
    if (_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
      return { type: 'nested', key, children: buildTree(file1[key], file2[key]) };
    }
    if (!_.isEqual(file1[key], file2[key])) {
      return {
        type: 'updated', key, val1: file1[key], val2: file2[key],
      };
    }
    return { type: 'notUpdated', key, val: file1[key] };
  });
  return tree;
};

export default buildTree;
