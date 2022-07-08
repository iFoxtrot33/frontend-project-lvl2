import fs from 'fs';
import path from 'path';
import process from 'process'
import keys from './node_modules/lodash/keys.js';
import union from './node_modules/lodash/union.js';
import last from './node_modules/lodash/last.js';
import yaml from 'js-yaml';



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

export const findDiff = (filepath1, filepath2) => {
  const file1 =  parseFile(filepath1);
  const file2 =  parseFile(filepath2);
  const key1 = keys(file1);
  const key2 = keys(file2);
  const commonArr = union(key1, key2);
  const diffArr = commonArr.reduce((acc, key) => {
    const one = file1[key];
    const two = file2[key];
    if (one === two) {
      acc.push(`  ${key}:${two}`);
      return acc;
    }
    if ((one !== two) && ( one !== undefined) && ( two !== undefined) ) {
        acc.push(`- ${key}:${one}`);
        acc.push(`+ ${key}:${two}`);
        return acc;
   } 
    if ((one !== two) && ( one !== undefined)) {
        acc.push(`- ${key}:${one}`);
        return acc;
    }
    if ((one !== two) && ( two !== undefined)) {
        acc.push(`+ ${key}:${two}`);
        return acc;
    }
    return acc;
  }, []);
  const objKey = 0;
  const objValue = 1;
  const sortedResult = diffArr.sort((a,b) => a.charCodeAt(2)-b.charCodeAt(2))
  const finalObj = sortedResult.reduce((acc, element) => {
    const temp = element.split(':');
    acc[temp[objKey]] = temp[objValue];
    return acc
  }, {});
  return  finalObj;
};
