process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: ['@antfu', 'plugin:storybook/recommended'],
  rules: {
    '@typescript-eslint/semi': ['error', 'never'],
  },
}
