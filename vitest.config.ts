import { ConfigEnv, ViteUserConfig, defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default defineConfig(
  (config: ConfigEnv): ReturnType<typeof mergeConfig> =>
    mergeConfig<ViteUserConfig, ViteUserConfig>(
      viteConfig(config),
      defineConfig({
        test: {
          globals: true,
          environment: 'jsdom',
          setupFiles: [
            'vitest-localstorage-mock',
            './resources/js/Tests/unit/SetupFiles/fa-icons.setup.ts',
            './resources/js/Tests/unit/SetupFiles/vitest-setup.ts',
          ],
          reporters: ['verbose'],

          exclude: ['**/node_modules/**', '**/e2e/**'],
        },
      }),
    ),
);
