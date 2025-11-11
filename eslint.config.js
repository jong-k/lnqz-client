import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { importX } from "eslint-plugin-import-x";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { configs as sonarConfigs } from "eslint-plugin-sonarjs";
import pluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { configs as tsConfigs } from "typescript-eslint";
import js from "@eslint/js";

export default defineConfig([
  importX.flatConfigs.react,
  importX.flatConfigs.typescript,
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    ignores: ["src/middleware.ts", "src/app/**/route.ts"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-console": "warn",
    },
  },
  { files: ["src/middleware.ts", "src/app/**/route.ts"], languageOptions: { globals: globals.node } },
  ...tsConfigs.recommended,
  ...nextVitals,
  ...nextTs,
  pluginUnicorn.configs.recommended,
  sonarConfigs.recommended,
  {
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
      "import-x/no-named-as-default-member": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
  eslintPluginPrettierRecommended,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
