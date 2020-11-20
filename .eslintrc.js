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
        extensions: ['.js', '.jsx'], // ALLOW OMMISION OF THESE EXTENSIONS :)
      },
      react: {
        pragma: 'React',
        version: 'detect',
      },
      'linkComponents': ['Hyperlink', { name: 'Link', 'linkAttribute': 'to' }],
    },
  },
  rules: {
    // TODO: SOME RULES MAY VARY ON ENVIRONMENT ...
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'spaced-comment': 1,
    'no-unused-vars': 1,
    'import/no-duplicates': 1,
    'import/no-unresolved': 1,
    'no-undef': 1,
    'no-unused-vars': 1,
    'react/prop-types': 1,
    'import/no-unresolved': 1,
    'react/display-name': 0,
  },
};
