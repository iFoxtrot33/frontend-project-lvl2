/* eslint-disable no-underscore-dangle */
import fs from 'fs';
import path, { dirname } from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

// eslint-disable-next-line import/prefer-default-export
export const parseFile = (filePath) => {
  const fileExtension = path.extname(filePath);
  switch (fileExtension) {
    case '.json':
      return JSON.parse(readFile(filePath));
    case '.yaml':
      return yaml.load(readFile(filePath));
    case '.yml':
      return yaml.load(readFile(filePath));
    default:
      throw new Error`This is unknown file format. Please use json, yaml or yml files.`();
  }
};
