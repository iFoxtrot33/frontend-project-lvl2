import path from 'path';

const buildFullPath = (filename) => path.resolve(process.cwd(), filename);

export default buildFullPath;
