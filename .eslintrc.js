module.exports = {
	env: {
		es2021: true,
		node: true,
		mocha: true,
	},
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'script',
	},
	extends: [
		'prettier',
	],
	rules: {
		camelcase: 'off',
		'no-console': 'warn',
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		quotes: ['error', 'single'],
		indent: ['error', 'tab']
	},
};
