import fs from 'fs';
import path from 'path';
import keys from './node_modules/lodash/keys.js'
import union from './node_modules/lodash/union.js'

const getFixturePath = (filename) => path.join('fixtures', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1 = JSON.parse(readFile('file1.json'));
const file2 = JSON.parse(readFile('file2.json'));

const findDiff = (file1, file2) => {
  const key1 = keys(file1);
  const key2 = keys(file2);
  const commonArr = union(key1, key2);
  const temp = [];
  const findDiff = commonArr.filter((key) => {
    const one = file1[key];
    const two = file2[key];
    if (one === two) {
      temp.push(`  ${key}:${two}`);
      return temp;
    }
    if ((one !== two) && ( one !== undefined)) {
        temp.push(`- ${key}:${one}`);
        return temp;
    }
    if ((one !== two) && ( two !== undefined)) {
        temp.push(`+ ${key}:${two}`);
        return temp;
    }
  });
  const sortedResult = temp.sort((a, b) => a.localeCompare(b))
  const final = {};
  const makeObj = sortedResult.map((element) => {
    const t = element.split(':');
    final[t[0]] = t[1];
  });
  console.log(temp);
  return final;
};

console.log(findDiff(file1, file2));