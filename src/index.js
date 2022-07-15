
import keys from './../node_modules/lodash/keys.js';
import union from './../node_modules/lodash/union.js';
import _ from 'lodash';

const findDiff = (file1, file2) => {
    const key1 = keys(file1);
    const key2 = keys(file2);
     const commonKeys = union(key1, key2);
    const sortedKeys = _.sortBy(commonKeys);
    const tree = sortedKeys.map((key) => {
      const value1 = file1[key];
      const value2 = file2[key];
      if (!_.has(file1, key)) {
        return { type: 'add', key, val: value2 };
      }
      if (!_.has(file2, key)) {
        return { type: 'remove', key, val: value1 };
      }
      if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
        return { type: 'recursion', key, children: findDiff(value1, value2) };
      }
      if (!_.isEqual(value1, value2)) {
        return {
          type: 'updated', key, val1: value1, val2: value2,
        };
      }
      return { type: 'same', key, val: value1 };
    });
    return tree;
  };

  export default findDiff;
