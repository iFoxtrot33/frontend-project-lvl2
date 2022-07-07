lint:
	npx eslint .
gendiff:
	node bin/gendiff.js
test:
	node --experimental-vm-modules node_modules/.bin/jest

