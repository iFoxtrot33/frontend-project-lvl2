import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import findDifference from '../src/index.js';
import {
  stylishResult,
  jsonFormat,
  resultLines,
} from '../__fixtures__/result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, './..', '__fixtures__', filename);

test.each([
  ['file1.json', 'file2.json', 'stylish', stylishResult],
  ['file1.yaml', 'file2.yml', 'stylish', stylishResult],
  ['file1.json', 'file2.yml', 'stylish', stylishResult],
  ['file1.json', 'file2.json', 'plain', resultLines],
  ['file3.json', 'file4.json', 'json', jsonFormat],
])('Test(%s, %s, %s)', (filePath1, filePath2, format, expected) => {
  expect(findDifference(getFixturePath(filePath1), getFixturePath(filePath2), format))
    .toBe(expected);
});

test('Default style value', () => {
  expect(findDifference(getFixturePath('file1.json'), getFixturePath('file2.yaml')))
    .toBe(stylishResult);
});

test('Wrong type of file', () => {
  expect(() => findDifference(
    getFixturePath('file1.txt'),
    getFixturePath('file2.json'),
  )).toThrow(Error);
});
