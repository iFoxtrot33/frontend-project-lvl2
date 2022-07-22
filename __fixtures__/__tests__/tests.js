import { test, expect } from '@jest/globals';
import  findDifference   from "./../../src/index.js"

const plainObject = 
`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`

const jsonFormat = `[{"type":"remove","key":"follow","val":false},{"type":"same","key":"host","val":"hexlet.io"},{"type":"remove","key":"proxy","val":"123.234.53.22"},{"type":"updated","key":"timeout","val1":50,"val2":20},{"type":"add","key":"verbose","val":true}]`

test('1st test - json & json', () => {
expect(findDifference('file1.json', 'file2.json','stylish')).toEqual( `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`);
});

test('2nd test - yaml & yaml ', () => {
    expect(findDifference('file1.yaml', 'file2.yaml','stylish')).toEqual(plainObject);
    });

test('2rd test - yml & yml ', () => {
    expect(findDifference('file1.yml', 'file2.yml','stylish')).toEqual(plainObject);
    });


test('4th test - yaml & yml ', () => {
    expect(findDifference('file1.yaml', 'file2.yml','stylish')).toEqual(plainObject);
    });

test('5th test - json & yaml ', () => {
    expect(findDifference('file3.json', 'file2.yaml','stylish')).toEqual(plainObject);
    });

test('6th test - json & yml ', () => {
    expect(findDifference('file3.json', 'file2.yml','stylish')).toEqual(plainObject);
    });     

test('7th test - json & json / plain format', () => {
    const result =
`Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
`
    expect(findDifference('file1.json', 'file2.json','plain')).toEqual(result);
});

test('8th test - json & json / in json format ', () => {
  expect(findDifference('file3.json', 'file4.json','json')).toEqual(jsonFormat);
  });