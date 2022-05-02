module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["plugin:react/recommended", "plugin:import/typescript"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "@typescript-eslint", "simple-import-sort", "import", "unused-imports", "folders"],
  rules: {
    curly: "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "no-console": ["error", { allow: ["error"] }],
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports: `import "./setup";`
          ["^\\u0000"],
          // Packages: `import fs from "fs";`
          ["^@?\\w"],
          // Internal packages.
          ["^(@|@codely)(/.*|$)"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "padding-line-between-statements": ["error", { blankLine: "always", prev: "*", next: "return" }],
    "linebreak-style": ["error", "unix"],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-confusing-non-null-assertion": ["error"],
    "@typescript-eslint/no-extra-non-null-assertion": ["error"],
    "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
    "@typescript-eslint/no-non-null-assertion": ["error"],
    "@typescript-eslint/prefer-for-of": ["error"],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          // Index signature
          "signature",

          // Fields
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "public-decorated-field",
          "protected-decorated-field",
          "private-decorated-field",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-abstract-field",
          "protected-abstract-field",
          "private-abstract-field",

          // Constructors
          "public-constructor",
          "protected-constructor",
          "private-constructor",

          // Methods
          "public-abstract-method",
          "protected-abstract-method",
          "private-abstract-method",
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "public-decorated-method",
          "protected-decorated-method",
          "private-decorated-method",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx", "*.html"],
    },
    {
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        "@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
        "@typescript-eslint/no-floating-promises": ["error"],
        "@typescript-eslint/no-require-imports": ["error"],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
        "@typescript-eslint/no-unnecessary-condition": ["error"],
        "@typescript-eslint/no-useless-constructor": ["error"],
        "@typescript-eslint/prefer-nullish-coalescing": ["error"],
        "@typescript-eslint/prefer-readonly": ["error"],
        "@typescript-eslint/promise-function-async": ["error", { checkArrowFunctions: false }],
        "@typescript-eslint/sort-type-union-intersection-members": ["error"],
        "@typescript-eslint/switch-exhaustiveness-check": ["error"],
        "folders/match-regex": [2, "^[a-z-]+$", "/src/"],
      },
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  ignorePatterns: ["**/migrations/**"],
};
