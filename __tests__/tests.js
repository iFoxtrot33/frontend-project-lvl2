/* eslint-disable import/named */
/* eslint-disable jest/valid-title */
import { test, expect } from '@jest/globals';
import findDifference from '../src/index.js';
import {
  stylishResult,
  plainObject,
  jsonFormat,
  resultLines,
} from '../__fixtures__/result.js';
import { getFixturePath } from '../src/parser.js';

test.each([
  ['file1.json', 'file2.json', 'stylish', stylishResult],
  ['file1.yaml', 'file2.yaml', 'stylish', plainObject],
  ['file1.yml', 'file2.yml', 'stylish', plainObject],
  ['file1.yaml', 'file2.yml', 'stylish', plainObject],
  ['file3.json', 'file2.yaml', 'stylish', plainObject],
  ['file3.json', 'file2.yml', 'stylish', plainObject],
  ['file1.json', 'file2.json', 'plain', resultLines],
  ['file3.json', 'file4.json', 'json', jsonFormat],
])('Test(%s, %s, %s)', (a, b, c, expected) => {
  expect(findDifference(getFixturePath(a), getFixturePath(b), c)).toBe(expected);
});
