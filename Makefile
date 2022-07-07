lint:
	npx eslint .
gendiff:
	node bin/gendiff.js
test:
	npm test

install: install-deps
	npx simple-git-hooks

install-deps:
	npm ci

