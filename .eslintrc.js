module.exports = {
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'import', 'emotion'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'],
      },
      react: {
        pragma: 'React',
        version: 'detect',
      },
      'linkComponents': ['Hyperlink', { name: 'Link', 'linkAttribute': 'to' }],
    },
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': 1,
    'no-undef': 1,
    'semi': 2,
    'spaced-comment': 1,
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'import/no-unresolved': 1,
    'import/no-duplicates': 1,
    'react/display-name': 0,
  },
};
