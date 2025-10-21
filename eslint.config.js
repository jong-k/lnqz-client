import { importX } from "eslint-plugin-import-x";
import pluginPerfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { configs as sonarConfigs } from "eslint-plugin-sonarjs";
import pluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import globals from "globals";
import { configs as tsConfigs } from "typescript-eslint";
import js from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";

export default defineConfig([
  { ignores: [".next/**", "./src/components/**"] },
  {
    extends: ["js/recommended"],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: { js },
  },

  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  ...tsConfigs.recommended,
  pluginNext.flatConfig.coreWebVitals,
  pluginUnicorn.configs.recommended,
  pluginPerfectionist.configs["recommended-natural"],
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,mts,cts}"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
      "import-x/no-named-as-default-member": "off",
      "perfectionist/sort-imports": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
  sonarConfigs.recommended,
  eslintPluginPrettierRecommended,
]);
