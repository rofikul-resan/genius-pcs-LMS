import js from '@eslint/js';
import globals from 'globals';
import * as tseslint from '@typescript-eslint/eslint-plugin';
import { configs as tseslintConfigs } from '@typescript-eslint/eslint-plugin';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
    {
        plugins: { js, prettier: eslintPluginPrettier },
        plugins: { js, eslintPluginPrettier },
        extends: ['plugin:@eslint/js/recommended'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        rules: {
            'prettier/prettier': 'error',
            eqeqeq: 'off',
            'no-unused-vars': 'error',
            'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
        },
    },
    tseslintRecommended,
    eslintConfigPrettier,
]);
