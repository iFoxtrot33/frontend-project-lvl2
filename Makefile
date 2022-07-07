install:
	npx simple-git-hooks
lint:
	npx eslint .
gendiff:
	node bin/gendiff.js
test:
	npm test

