install: install-deps

install-deps:
	npm install

lint:
	npx eslint .

start:
	# npx babel-node -- src/bin/brain-even.js
	npx babel-node -- src/bin/brain-calc.js

publish:
	npm publish
