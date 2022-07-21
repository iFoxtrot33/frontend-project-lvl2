import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


/*const getFixturePath = (p) => path.resolve(process.cwd(), p).trim();
const readFile = (path) => fs.readFileSync(getFixturePath(path), 'utf-8');*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


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
