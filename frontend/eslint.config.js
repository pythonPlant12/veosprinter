import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  files: ['**/*.{js,ts,vue}'],
  ignores: [
    '**/*.config.js',
    '.nuxt/*',
    '.vscode/*',
    'node_modules/*',
    'public/*',
    '.husky/*',
    '**/*.d.ts',
    '.nuxt/*',
    '**/*.config.mjs',
    '.eslintrc.js'
  ],
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: false,
        singleQuote: true,
        tabWidth: 2
      }
    ],
    semi: true
  },
  plugins: {
    '@typescript-eslint': true,
    'prettier': true
  },
  languageOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: '.',
      sourceType: 'module',
      ecmaFeatures: {
        decorators: true
      }
    }
  }
})