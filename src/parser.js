import fs from 'fs';
import path, { dirname } from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getTruePath = (filename) => path.resolve(process.cwd(), filename);
export const getFixturePath = (filename) => path.resolve(__dirname, './..', '__fixtures__', filename);

export const parseFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  const fileExtension = path.extname(filePath);
  switch (fileExtension) {
    case '.json':
      return JSON.parse(data);
    case '.yaml':
      return yaml.load(data);
    case '.yml':
      return yaml.load(data);
    default:
      throw new Error(`'${fileExtension}' is unknown file format. Please use json, yaml or yml files. !`);
  }
};
