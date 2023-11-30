const antfu = require('@antfu/eslint-config').default;

module.exports = antfu({
	stylistic: {
		semi: true,
		indent: 'tab',
	},
	ignores: ['*.json'],
	typescript: true,
	jsonc: false,
}, {

	rules: {
		'prefer-arrow-callback': 0,
		'indent': ['error', 'tab', { ignoredNodes: ['PropertyDefinition'] }],
		'semi': 'error',
		'style/semi': 'error',
		'max-len': ['error', 120],
		'style/jsx-quotes': 'error',
		'quotes': ['error', 'single'],
		'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
		],
	},
	ignores: ['*.json', 'tsconfig.*.json'],
});
