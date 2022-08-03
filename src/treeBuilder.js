import _ from 'lodash';

const buildTree = (filePath1, filePath2) => {
  const keys = _.union(_.keys(filePath1), _.keys(filePath2));
  const sortedKeys = _.sortBy(keys);
  const tree = sortedKeys.map((key) => {
    if (!_.has(filePath1, key)) {
      return { type: 'add', key, val: filePath2[key] };
    }
    if (!_.has(filePath2, key)) {
      return { type: 'remove', key, val: filePath1[key] };
    }
    if (_.isPlainObject(filePath1[key]) && _.isPlainObject(filePath2[key])) {
      return { type: 'nested', key, children: buildTree(filePath1[key], filePath2[key]) };
    }
    if (!_.isEqual(filePath1[key], filePath2[key])) {
      return {
        type: 'updated', key, val1: filePath1[key], val2: filePath2[key],
      };
    }
    return { type: 'notUpdated', key, val: filePath1[key] };
  });
  return tree;
};

export default buildTree;
