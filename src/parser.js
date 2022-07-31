import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filePath) => {
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

export default parseFile;
