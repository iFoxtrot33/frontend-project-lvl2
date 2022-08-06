import path from 'path';
import fs from 'fs';
import _ from 'lodash';

export const buildFullPath = (filename) => path.resolve(process.cwd(), filename);

export const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');

export const fileType = (filePath) => {
  let result = path.extname(filePath).slice('');
  result = _.drop(result);
  return result.join('');
};
