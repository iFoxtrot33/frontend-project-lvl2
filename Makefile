install:
	npx simple-git-hooks
install-deps:
	npm ci
lint:
	npx eslint .
gendiff:
	node bin/gendiff.js
test:
	npm test

