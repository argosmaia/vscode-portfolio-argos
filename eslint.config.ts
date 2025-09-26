import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
    plugins: { js }, 
    extends: ["js/recommended", 
      "eslint:recommended",
      ...tseslint.configs.recommended,], 
    languageOptions: { globals: globals.browser },
    rules: {
      "@typescript-eslint/no-explicit-any": "error", // proibido usar any
      "@typescript-eslint/explicit-function-return-type": "warn", // sugere tipar funções
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // não deixar variáveis mortas
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
