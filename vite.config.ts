import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import manifestSRI from 'vite-plugin-manifest-sri';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { ViteUserConfig } from 'vitest/config';

export default ({ mode }: { mode: string }): ViteUserConfig => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

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
			visualizer({
				open: true, // Automatically open the report in your browser after build
				filename: 'bundle-report.html', // Output filename
				gzipSize: true, // Show gzipped sizes
				brotliSize: true, // Show brotli sizes
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
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						'vue-vendor': ['vue', 'vue-router', 'pinia'],
						apollo: ['@apollo/client', '@vue/apollo-composable'],
						charts: ['chart.js', 'vue-chartjs'],
					},
				},
			},
		},
	});
};
