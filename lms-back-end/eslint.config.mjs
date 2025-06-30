import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js, eslintPluginPrettier },
        extends: ["js/recommended"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        rules: {
            "prettier/prettier": "error",
            eqeqeq: "off",
            "no-unused-vars": "error",
            "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
            "prettier/prettier": "error",
        },
    },
    tseslint.configs.recommended,
    eslintConfigPrettier,
    { languageOptions: { globals: globals.browser } },
]);
