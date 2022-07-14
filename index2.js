import fs from 'fs';
import path from 'path';
import process from 'process'
import keys from './node_modules/lodash/keys.js';
import union from './node_modules/lodash/union.js';
import last from './node_modules/lodash/last.js';
import yaml from 'js-yaml';
import _ from 'lodash';



const getFixturePath = (p) => path.resolve(process.cwd(), p).trim();
const readFile = (path) => fs.readFileSync(getFixturePath(path), 'utf-8');

const parseFile = (filePath) => {
    const fileExtension = last(filePath.split('.')).toLowerCase();
    if (fileExtension === 'json') {
      return JSON.parse(readFile(filePath));
    }
    if (fileExtension === 'yaml' || fileExtension === 'yml') {
      return yaml.load(readFile(filePath));
    }
    throw new Error('Unknown file format. Please use json, yaml or yml files.');
  };


const findDiff = (file1, file2) => {
    const key1 = keys(file1);
    const key2 = keys(file2);
     const commonKeys = union(key1, key2);
    const sortedKeys = _.sortBy(commonKeys);
    return sortedKeys.map((key) => {
      const value1 = file1[key];
      const value2 = file2[key];
      if (!_.has(file1, key)) {
        return { type: 'add', key, value: value2 };
      }
      if (!_.has(file2, key)) {
        return { type: 'remove', key, value: value1 };
      }
      if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
        return { type: 'recursion', key, children: findDiff(value1, value2) };
      }
      if (!_.isEqual(value1, value2)) {
        return {
          type: 'updated', key, val1: value1, val2: value2,
        };
      }
      return { type: 'same', key, value: value1 };
    });
  };

  
console.log(findDiff(parseFile('__fixtures__/file1.json'),parseFile('__fixtures__/file2.json')));