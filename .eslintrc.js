module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'ímport', 'react-hooks'],
  rules: {
    'no-shadow': 'off',
    'no-undef': 'off',
    'import/no-unresolved': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['./src', './src/components/atoms', './src/constants/'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
};
