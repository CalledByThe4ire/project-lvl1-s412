install: install-deps

install-deps:
	npm install

lint:
	npx eslint .

start:
	npx babel-node -- src/bin/brain-even.js

publish:
	npm publish
