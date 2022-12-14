module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: [''],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
  rules: {
    'react/jsx-pascal-case': 'off',
  },
};
