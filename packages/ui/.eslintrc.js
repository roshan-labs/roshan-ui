module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Component file names are generally not restricted
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
  },
}
