import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  files: ["**/*.{js,ts,vue}"],
  ignores: [
    "**/*.config.js",
    ".nuxt/*",
    ".vscode/*",
    "node_modules/*",
    "public/*",
    ".husky/*",
    "**/*.d.ts",
    ".nuxt/*",
    "**/*.config.mjs",
    ".eslintrc.js",
  ],
  rules: {
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        bracketSpacing: true,
        trailingComma: "es5",
        printWidth: 100,
        arrowParens: "always",
        vueIndentScriptAndStyle: true,
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    semi: true,
    "template-curly-spacing": ["error", "always"],
    "prefer-destructuring": [
      "error",
      {
        array: true,
        object: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: { multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
      },
    ],
    "callback-return": "error",
    "require-await": "error",
    "prefer-promise-reject-errors": "error",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "always",
      },
    ],
    "vue/html-indent": ["error", 2],
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 0,
        switchCase: 1,
      },
    ],
  },
  plugins: {
    "@typescript-eslint": true,
    prettier: true,
    import: true,
    vue: true,
    "unused-imports": true,
  },
  languageOptions: {
    ecmaVersion: 2024,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "tsconfig.json",
      tsconfigRootDir: ".",
      sourceType: "module",
      ecmaFeatures: {
        decorators: true,
        jsx: true,
      },
    },
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
});
