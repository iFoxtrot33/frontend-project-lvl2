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
  const temp = [];
  const findD = commonArr.filter((key) => {
    const one = file1[key];
    const two = file2[key];
    if (one === two) {
      temp.push(`  ${key}:${two}`);
      return `  ${key}:${two}`;
    }
    if ((one !== two) && ( one !== undefined) && ( two !== undefined) ) {
        temp.push(`- ${key}:${one}`);
        temp.push(`+ ${key}:${two}`);
        return `one`;
    }
    if ((one !== two) && ( one !== undefined)) {
        temp.push(`- ${key}:${one}`);
        return `one`;
    }
    if ((one !== two) && ( two !== undefined)) {
        temp.push(`+ ${key}:${two}`);
        return `one`;
    }
  }, {});
  console.log(findD);
  const sortedResult = temp.sort((a,b) => a.charCodeAt(2)-b.charCodeAt(2))
  const final = {};
  const makeObj = sortedResult.map((element) => {
    const t = element.split(':');
    final[t[0]] = t[1];
  });
  return final;
};

console.log(findDiff('fixtures/file1.json', 'fixtures/file2.json'));

export default findDiff;
