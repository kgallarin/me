import eslintConfigPrettier from 'eslint-config-prettier';
import pluginConfigVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

export default defineConfig([
  ...pluginConfigVue.configs['flat/essential'],
  ...tsEslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: vueParser,
      parserOptions: {
        parser: tsEslint.parser,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': 'error',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      strict: ['warn', 'never'],
      'vue/attribute-hyphenation': 'warn',
      'vue/html-self-closing': 'off',
      'vue/component-definition-name-casing': 'warn',
      // Downgrade flat/essential errors → warnings
      'vue/no-async-in-computed-properties': 'warn',
      'vue/no-use-v-if-with-v-for': 'warn',
      'vue/no-dupe-keys': 'warn',
      'vue/no-duplicate-attributes': 'warn',
      'vue/no-multi-spaces': 'warn',
      'vue/no-shared-component-data': 'warn',
      'vue/no-side-effects-in-computed-properties': 'warn',
      'vue/no-template-key': 'warn',
      'vue/no-unused-vars': 'warn',
      'vue/require-render-return': 'warn',
      'vue/require-valid-default-prop': 'warn',
      'vue/return-in-computed-property': 'warn',
      'vue/html-end-tags': 'warn',
      'vue/this-in-template': 'warn',
      'vue/v-bind-style': 'warn',
      'vue/v-on-style': 'warn',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'objectLiteralProperty',
          format: ['camelCase', 'UPPER_CASE', 'snake_case'],
          filter: {
            regex: '^(vue/|@|.*-.*)',
            match: false,
          },
        },
      ],
    },
  },
  eslintConfigPrettier,
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'public/**',
      'vendor/**',
      'bootstrap/cache/**',
      'storage/**',
      '*.php',
      '*.json',
      '*config.ts',
    ],
  },
]);
