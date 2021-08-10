module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:sonarjs/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'sonarjs',
  ],
  rules: {
    'complexity': ['error', 5]
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'sourceType': 'module',
  },
}
