import fs from 'fs';
import path from 'path';
import process from 'process';
import last from './../node_modules/lodash/last.js';
import yaml from 'js-yaml';


const getFixturePath = (p) => path.resolve(process.cwd(), p).trim();
const readFile = (path) => fs.readFileSync(getFixturePath(path), 'utf-8');

export const parseFile = (filePath) => {
    const fileExtension = last(filePath.split('.')).toLowerCase();
    if (fileExtension === 'json') {
      return JSON.parse(readFile(filePath));
    }
    if (fileExtension === 'yaml' || fileExtension === 'yml') {
      return yaml.load(readFile(filePath));
    }
    throw new Error('Unknown file format. Please use json, yaml or yml files.');
  };