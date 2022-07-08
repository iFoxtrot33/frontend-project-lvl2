import { test, expect } from '@jest/globals';
import { findDiff  } from "./../../index.js"

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
