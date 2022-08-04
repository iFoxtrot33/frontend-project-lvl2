import yaml from 'js-yaml';

const parseFile = (fileExtension, data) => {
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
