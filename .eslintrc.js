module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
