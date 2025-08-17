import { fileURLToPath } from "url";
import { dirname } from "path";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      eqeqeq: ["error", "always"],
      semi: ["error"],
      quotes: ["error", "double"],
      "import/no-cycle": ["error", { maxDepth: 10 }],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": ["error"],
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "comma-dangle": ["error", "always-multiline"],
      "prefer-const": "error",
      "no-var": "error",
      "arrow-parens": ["error", "always"],
      "no-duplicate-imports": "error",
      "consistent-return": "warn",
      "import/order": ["error", { "newlines-between": "always" }],
    },
  }),
];

export default eslintConfig;
