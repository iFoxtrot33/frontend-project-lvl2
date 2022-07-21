import fs from 'fs';
import path from 'path';
import process from 'process';
import yaml from 'js-yaml';


const getFixturePath = (p) => path.resolve(process.cwd(), p).trim();
const readFile = (path) => fs.readFileSync(getFixturePath(path), 'utf-8');


export const parseFile = (filePath) => {
  const fileExtension =  path.extname(filePath);
    switch (fileExtension) {
      case '.json':
        return JSON.parse(readFile(filePath));
      case '.yaml':
        return yaml.load(readFile(filePath));
      case '.yml':
        return yaml.load(readFile(filePath));
      default:
        throw new Error `This is unknown file format. Please use json, yaml or yml files.`;
    }
  };
