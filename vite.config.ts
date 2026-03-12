import { loadEnv, defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import manifestSRI from "vite-plugin-manifest-sri";
import viteTsConfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import { ViteUserConfig } from 'vitest/config';

export default ({ mode }: { mode: string }): ViteUserConfig => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
        plugins: [
            laravel({
                input: ['resources/scss/app.scss', 'resources/js/app.ts'],
                refresh: true,
            }),
            manifestSRI(),
            viteTsConfigPaths(),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
            checker({
                vueTsc: true,
            }),
        ],
        server: {
            watch: {
                ignored: ['**/storage/framework/views/**'],
            },
        },
        resolve: {
            alias: {
                '@': '/resources/js',
                '@scss': '/resources/scss',
                '@src': '/resources',

                '@images': '/resources/images',
                '@svg': '/resources/svg',
            },
        },
    });
};

