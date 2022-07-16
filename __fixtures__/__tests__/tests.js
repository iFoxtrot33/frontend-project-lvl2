import { test, expect } from '@jest/globals';
import  findDiff   from "./../../src/index.js"
import { parseFile } from "./../../src/parser.js"
import { formatter} from "./../../src/stylish.js"

test('1st test - json & json', () => {
expect(formatter(findDiff(parseFile('./__fixtures__/file1.json'), parseFile('./__fixtures__/file2.json' )))).toEqual(   `{
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
    expect(formatter(findDiff(parseFile('./__fixtures__/file1.yaml'), parseFile('./__fixtures__/file2.yaml' )))).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
    });

test('2rd test - yml & yml ', () => {
    expect(formatter(findDiff(parseFile('./__fixtures__/file1.yml'), parseFile('./__fixtures__/file2.yml' )))).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
    });


test('4th test - yaml & yml ', () => {
    expect(formatter(findDiff(parseFile('./__fixtures__/file1.yaml'), parseFile('./__fixtures__/file2.yml' )))).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
    });

    `{
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
    }`

