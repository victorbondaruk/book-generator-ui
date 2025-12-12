import globals from 'globals'

export default [
    {
        ignores: ['build/**', 'dist/**', 'node_modules/**', 'public/**', '*.config.js']
    },
    {
        files: ['src/**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2022
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
            'prefer-const': 'error',
            'no-var': 'error',
            'eqeqeq': ['error', 'always', { null: 'ignore' }],
            'semi': ['error', 'never'],
            'quotes': ['error', 'single', { avoidEscape: true }]
        }
    },
    {
        files: ['src/**/*.test.{js,jsx}', 'src/**/*.spec.{js,jsx}'],
        languageOptions: {
            globals: {
                ...globals.node,
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                vi: 'readonly'
            }
        }
    }
]
