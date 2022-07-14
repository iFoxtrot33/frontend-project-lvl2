import { test, expect } from '@jest/globals';
import { findDiff  } from "./../../index.js"
import { findDiff2  } from "./../../index2.js"

test('1st test - json & json', () => {
expect(findDiff('__fixtures__/file1.json', '__fixtures__/file2.json' )).toEqual({
'- follow': 'false',
'  host': 'hexlet.io',
'- proxy': '123.234.53.22',
'- timeout': '50',
'+ timeout': '20',
'+ verbose': 'true'});
});

test('2nd test - yaml & yaml ', () => {
    expect(findDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml' )).toEqual({
    '- follow': 'false',
    '  host': 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- timeout': '50',
    '+ timeout': '20',
    '+ verbose': 'true'});
    });

test('3rd test - yml & yml', () => {
    expect(findDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml' )).toEqual({
    '- follow': 'false',
    '  host': 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- timeout': '50',
    '+ timeout': '20',
    '+ verbose': 'true'});
    });

test('4th test - json & yaml', () => {
    expect(findDiff('__fixtures__/file1.json', '__fixtures__/file2.yaml' )).toEqual({
    '- follow': 'false',
    '  host': 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- timeout': '50',
    '+ timeout': '20',
    '+ verbose': 'true'});
    });

test('5th test - json & yml', () => {
    expect(findDiff('__fixtures__/file1.json', '__fixtures__/file2.yml' )).toEqual({
    '- follow': 'false',
    '  host': 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- timeout': '50',
    '+ timeout': '20',
    '+ verbose': 'true'});
    });

test('6th test - yaml & yml', () => {
    expect(findDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yml' )).toEqual({
    '- follow': 'false',
    '  host': 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- timeout': '50',
    '+ timeout': '20',
    '+ verbose': 'true'});
    });

test('7th test - json & json', () => {
    expect(findDiff('__fixtures__/file11.json', '__fixtures__/file22.json' )).toEqual({
        'common': {
         '+ follow': 'false',
         '  setting1':'Value 1',
         '- setting2': '200',
         '- setting3': 'true',
         '+ setting3': 'null',
         '+ setting4': 'blah blah',
         '+ setting5': {
            '  key5':' value5',
            },
            '  setting6': {
                '  doge': {
                 '- wow': ' ',
                 '+ wow':'so much'
                },
              '  key': 'value',
              '+ ops': 'vops'
            }
        },
        '  group1': {
         ' - baz': 'bas',
          '+ baz': 'bars',
          '  foo': 'bar',
          '- nest': {
            '  key': 'value'
            },
         ' + nest': 'str'
        },
      '- group2': {
         '  abc': '12345',
          ' deep': {
              '  id': '45',
            }
        },
      '+ group3': {
            '  deep': {
                '  id': {
                  '  number': '45'
                }
            },
          '  fee': '100500'
        }
    });
    });
    