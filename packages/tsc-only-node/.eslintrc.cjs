require('dotenv').config();

const { NODE_ENV } = process.env;
console.log('|>> NODE_ENV in eslint config ===>', NODE_ENV);

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json']
	},
	plugins: ['@typescript-eslint'],
	env: {
		es2020: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier'
	]
};
