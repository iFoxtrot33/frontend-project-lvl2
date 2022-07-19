test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

gendiff:
	index.js

lint:
	npx eslint .
