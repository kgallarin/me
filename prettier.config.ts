import { type Config } from 'prettier';

const config: Config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: true,
  importOrderParserPlugins: ['typescript', 'vue'],
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrder: [
    '<BUILTIN_MODULES>',
    '^vue$', // Core Framework
    '<THIRD_PARTY_MODULES>', // External packages (Axios, Lodash, etc.)
    '^@/Apollo', // Infrastructure
    '^@/Router',
    '^@/Store',
    '^config',
    '^(?=content|api)',
    '^@/Types',
    '^interface',
    '^(?=./types)',
    '^@/Composables', // Logic
    '^hooks/',
    '^utils/',
    '^@/Components', // UI
    '^(components/|./index)',
    '^@/Pages/(.*)$',
    '^mock/', // Test
    '^\\.\\./(.*)$', // Parent relative imports
    '^[./]', // Siblings relative imports
    '^@/images', // Assets
    '^.+\\.svg$',
    '^.+\\.scss$', // Styles
    '^(?=./styles.module.scss)',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindConfig: './tailwind.config.ts',
  tailwindAttributes: [
    'class',
    'className',
    'container-classes',
    'first-bg-classes',
    'second-bg-classes',
    'text-left-classes',
    'text-right-classes',
    'containerClasses',
    'firstBgClasses',
    'secondBgClasses',
    'textLeftClasses',
    'textRightClasses',
    ':container-classes',
    ':first-bg-classes',
    ':second-bg-classes',
    ':text-left-classes',
    ':text-right-classes',
    ':containerClasses',
    ':firstBgClasses',
    ':secondBgClasses',
    ':textLeftClasses',
    ':textRightClasses',
  ],
  // @ts-ignore
  tailwindFunctions: ['tw', 'twMerge'],
};

export default config;
