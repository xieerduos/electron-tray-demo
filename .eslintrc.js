module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/standard'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false
            }
        ],
        'no-regex-spaces': 'error',
        'no-multi-spaces': 'error',
        'array-bracket-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'never'],
        'block-spacing': ['error', 'never'],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'computed-property-spacing': ['error', 'never'],
        'no-trailing-spaces': 'off',
        'no-spaced-func': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'ignore',
                named: 'ignore'
            }
        ],
        'space-before-blocks': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': [
            'error',
            {
                int32Hint: false
            }
        ],
        'space-unary-ops': 'error',
        'spaced-comment': ['error', 'always'],
        'arrow-spacing': 'error',
        'yield-star-spacing': [
            'error',
            {
                before: true,
                after: false
            }
        ],
        'no-irregular-whitespace': 'error',
        'template-curly-spacing': ['error', 'never'],
        'max-len': ['error', 120],
        'no-multiple-empty-lines': 'error',
        'eol-last': 'off',
        'lines-around-comment': [
            'error',
            {
                beforeBlockComment: false
            }
        ],
        curly: ['error', 'multi-line'],
        camelcase: [
            'error',
            {
                properties: 'never'
            }
        ],
        'no-unused-vars': 0,
        'arrow-parens': 0,
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'no-console': 0,
        'generator-star-spacing': 0,
        'no-var': 1,
        eqeqeq: ['error', 'smart'],
        semi: [1, 'always'],
        'operator-linebreak': [
            2,
            'before',
            {
                overrides: {
                    '?': 'after'
                }
            }
        ],
        'no-debugger': 2,
        quotes: [1, 'single']
    }
};
