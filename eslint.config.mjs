import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import noConsoleRule from "./no-console-rule.js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      custom: {
        rules: {
          "no-console": noConsoleRule
        }
      }
    },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "custom/no-console": "error"
    }
  },
]);
