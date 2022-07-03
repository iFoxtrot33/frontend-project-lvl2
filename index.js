import fs from 'fs';
import path from 'path';
import process from 'process'
import keys from './node_modules/lodash/keys.js'
import union from './node_modules/lodash/union.js'

const getFixturePath = (p) => path.resolve(process.cwd(), p).trim();
const readFile = (path) => fs.readFileSync(getFixturePath(path), 'utf-8');

const file = (path) => JSON.parse(readFile(path));

const findDiff = (path1, path2) => {
  const file1 =  file(path1);
  const file2 =  file(path2);
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
  const sortedResult = diffArr.sort((a,b) => a.charCodeAt(2)-b.charCodeAt(2))
  const finalObj = sortedResult.reduce((acc, element) => {
    const temp = element.split(':');
    acc[temp[0]] = temp[1];
    return acc
  }, {});
  return  finalObj;
};

export default findDiff;
