import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['**/dist/**', '**/.vitepress/**', '**/node_modules/**', '**/build/**']
  },
  {
    languageOptions: {
      globals: globals.node,
      parser: tsParser
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-console': 'warn',
      'no-unused-vars': 'warn'
    }
  }
]
