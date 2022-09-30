// Docs source: https://typescript-eslint.io/docs/
// Docs source: https://typescript-eslint.io/docs/linting/typed-linting
// Docs source: https://typescript-eslint.io/docs/linting/typed-linting/#i-get-errors-telling-me-the-file-must-be-included-in-at-least-one-of-the-projects-provided
// Docs source: https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html
// Docs source (re: Prettier config - see bottom): https://typescript-eslint.io/docs/linting/configs
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "2021",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "airbnb-base",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  env: {
    node: true, // Enable Node.js global variables
    es2021: true,
  },
  ignorePatterns: ["jest.config.ts", "dist", "node_modules"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".d.ts", ".js"],
      },
    },
  },
  // ESLint rules: https://eslint.org/docs/latest/rules/
  // @typescript-eslint rules: https://typescript-eslint.io/rules/
  // @airbnb rules: https://airbnb.io/javascript/
  rules: {
    "no-console": "off",
    "no-plusplus": "off",
    "no-useless-concat": "off",
    "import/extensions": "off",
    "prefer-const": "warn",
    "prefer-template": "warn",
    "no-unused-vars": "warn",
    // "import/prefer-default-export": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
