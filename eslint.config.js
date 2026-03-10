import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactHooksOrder from 'eslint-plugin-react-hooks-order';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      perfectionist.configs['recommended-natural'],
    ],
    plugins: {
      import: importPlugin,
      hooks: reactHooks,
      'hooks-order': reactHooksOrder,
      react: reactPlugin,
      eslintConfigPrettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'import/no-duplicates': [
        'error',
        {
          considerQueryString: true,
        },
      ],

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['return', 'switch', 'case', 'default', 'if', 'for'],
        },
      ],

      'react/jsx-newline': 'error',
      'react/no-array-index-key': 'error',
      'no-console': 'error',

      // 'hooks-order/sort': [
      //   2,
      //   {
      //     groups: [
      //       'useIntl',
      //       'useUnit',
      //       'useStore',
      //       'useEvent',
      //       'useAppDispatch',
      //       'useAppSelector',
      //       'useState',
      //       'useRef',
      //       'useCallback',
      //       'useLayoutEffect',
      //       'useEffect',
      //     ],
      //   },
      // ],
    },
  },
]);
