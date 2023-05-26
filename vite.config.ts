import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import { resolve } from "path";
import { wrapperEnv } from "./build/utils/utils";
import { createProxy } from "./build/config/proxy";
import { createVitePlugins } from "./build/plugin";
import { createBuild } from "./build/config/build";

// @see: https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
	const root = process.cwd(); // 当前工作目录
	const isBuild = command === "build"; // 是否是构建 serve
	const env = loadEnv(mode, root); // 加载env环境
	const viteEnv = wrapperEnv(env);

	const { VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv;

	return {
		base: VITE_PUBLIC_PATH,
		root,
		plugins: createVitePlugins(viteEnv, isBuild),
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src")
			}
		},
		server: {
			host: true,
			open: true,
			hmr: true,
			proxy: createProxy(VITE_PROXY)
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
					additionalData: `@import "@/styles/var.less";`
				}
			}
		},
		build: createBuild(viteEnv)
	};
});
