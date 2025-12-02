/**
 * ESLint configuration for n8n-nodes-data-cleaner
 *
 * Uses the official n8n-nodes-base ESLint plugin for node development.
 */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'n8n-nodes-base'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:n8n-nodes-base/nodes',
	],
	env: {
		node: true,
		es2021: true,
	},
	rules: {
		// Allow explicit any in specific cases (utilities)
		'@typescript-eslint/no-explicit-any': 'warn',

		// Enforce consistent type imports
		'@typescript-eslint/consistent-type-imports': 'error',

		// Allow unused vars with underscore prefix
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
		],

		// n8n specific rules
		'n8n-nodes-base/node-param-description-excess-final-period': 'off',
		'n8n-nodes-base/node-param-description-missing-final-period': 'off',
	},
	ignorePatterns: ['dist/', 'node_modules/', 'gulpfile.js'],
};
