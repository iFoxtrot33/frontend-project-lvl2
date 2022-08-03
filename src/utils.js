import path from 'path';
import fs from 'fs';

export const buildFullPath = (filename) => path.resolve(process.cwd(), filename);

export const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');
