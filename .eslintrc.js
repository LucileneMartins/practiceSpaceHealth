module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
  extends: ['plugin:cypress/recommended'],
  plugins: ['prettier'],
  rules: {
    'cypress/no-unnecessary-waiting': 'warn',
    'prettier/prettier': 'error',
  },
};
