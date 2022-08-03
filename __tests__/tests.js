import { test, expect } from '@jest/globals';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import findDifference from '../src/index.js';
import {
  stylishResult,
  plainObject,
  jsonFormat,
  resultLines,
} from '../__fixtures__/result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, './..', '__fixtures__', filename);

test.each([
  ['file1.json', 'file2.json', 'stylish', stylishResult],
  ['file1.yaml', 'file2.yaml', 'stylish', plainObject],
  ['file1.yml', 'file2.yml', 'stylish', plainObject],
  ['file1.yaml', 'file2.yml', 'stylish', plainObject],
  ['file3.json', 'file2.yaml', 'stylish', plainObject],
  ['file3.json', 'file2.yml', 'stylish', plainObject],
  ['file1.json', 'file2.json', 'plain', resultLines],
  ['file3.json', 'file4.json', 'json', jsonFormat],
])('Test(%s, %s, %s)', (filePath1, filePath2, format, expected) => {
  expect(findDifference(getFixturePath(filePath1), getFixturePath(filePath2), format))
    .toBe(expected);
});
