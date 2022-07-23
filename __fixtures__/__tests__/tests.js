/* eslint-disable jest/valid-title */
/* eslint-disable import/named */
import { test, expect } from '@jest/globals';
import findDifference from '../../src/index.js';
import {
  stylishResult,
  plainObject,
  jsonFormat,
  resultLines,
} from '../result.js';

test('1st test - json & json', () => {
  expect(findDifference('file1.json', 'file2.json', 'stylish')).toEqual(stylishResult);
});

test('2nd test - yaml & yaml ', () => {
  expect(findDifference('file1.yaml', 'file2.yaml', 'stylish')).toEqual(plainObject);
});

test('2rd test - yml & yml ', () => {
  expect(findDifference('file1.yml', 'file2.yml', 'stylish')).toEqual(plainObject);
});

test('4th test - yaml & yml ', () => {
  expect(findDifference('file1.yaml', 'file2.yml', 'stylish')).toEqual(plainObject);
});

test('5th test - json & yaml ', () => {
  expect(findDifference('file3.json', 'file2.yaml', 'stylish')).toEqual(plainObject);
});

test('6th test - json & yml ', () => {
  expect(findDifference('file3.json', 'file2.yml', 'stylish')).toEqual(plainObject);
});

test('7th test - json & json / plain format', () => {
  expect(findDifference('file1.json', 'file2.json', 'plain')).toEqual(resultLines);
});

test('8th test - json & json / in json format ', () => {
  expect(findDifference('file3.json', 'file4.json', 'json')).toEqual(jsonFormat);
});
