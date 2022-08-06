import path from 'path';
import fs from 'fs';
import _ from 'lodash';

export const buildFullPath = (filename) => path.resolve(process.cwd(), filename);

export const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');

export const fileType = (filePath) => {
  const fileTypeWithDot = path.extname(filePath).slice('');
  const fileTypeWithoutDot = _.drop(fileTypeWithDot);
  return fileTypeWithoutDot.join('');
};
