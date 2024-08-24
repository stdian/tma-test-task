import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => {
	const isProd = mode === "production";

	return {
		base: "/",
		server: {
			port: 8080,
		},
		preview: {
			port: 8080,
			host: "0.0.0.0",
		},
		build: {
			minify: isProd,
			sourcemap: !isProd,
			outDir: "build",
			emptyOutDir: true,
			rollupOptions: {
				output: {
					assetFileNames: assetInfo => {
						const ext = assetInfo.name?.split(".").pop();
						let prefix = "";
						if (ext?.match(/eot|ttf|otf|woff|woff2/)) {
							prefix = "fonts/";
						} else if (ext?.match(/jpg|jpeg|png|gif|svg|webp/)) {
							prefix = "images/";
						} else if (ext?.match(/css/)) {
							prefix = `${ext}/`;
						}
						return `assets/${prefix}[hash:16][extname]`;
					},
					chunkFileNames: isProd
						? "assets/js/[hash:16].js"
						: "assets/js/[name]-[hash:16].js",
					entryFileNames: isProd
						? "assets/js/[hash:16].js"
						: "assets/js/[name]-[hash:16].js",
				},
			},
		},
		plugins: [
			react(),
			nodePolyfills({
				globals: {
					Buffer: true,
					global: true,
					process: true,
				},
				protocolImports: true,
			}),
			ViteImageOptimizer({
				png: {
					quality: 100,
				},
				jpeg: {
					quality: 100,
				},
				jpg: {
					quality: 100,
				},
				svg: {
					multipass: true,
					plugins: [
						"preset-default",
						"prefixIds",
						{
							name: "removeViewBox",
						},
						{
							name: "removeEmptyAttrs",
						},
						{
							name: "sortAttrs",
							params: {
								xmlnsOrder: "alphabetical",
							},
						},
					],
				},
			}),
		],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
				features: path.resolve(__dirname, "./src/features"),
				assets: path.resolve(__dirname, "./src/assets"),
				helpers: path.resolve(__dirname, "./src/helpers"),
				utils: path.resolve(__dirname, "./src/utils"),
				interfaces: path.resolve(__dirname, "./src/interfaces"),
			},
		},
		define: {
			MODE: JSON.stringify(mode),
		},
	};
});
