import type { ProxyOptions } from "vite";

type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

type ProxyTargetList = Record<string, ProxyOptions>;

const httpsRE = /^https:\/\//;

/**
 * Generate proxy
 * @param list
 */
export function createProxy(list: ProxyList = []) {
	const ret: ProxyTargetList = {};
	for (const [prefix, target] of list) {
		const isHttps = httpsRE.test(target);

		ret[prefix] = {
			target: target, // 请求转发地址
			changeOrigin: true, // 是否跨域
			ws: true, // 是否代理 websockets
			rewrite: path => path.replace(new RegExp(`^${prefix}`), ""), // 重写路径
			// https is require secure=false
			...(isHttps ? { secure: false } : {}) // https 需要配置 secure: false
		};
	}
	return ret;
}
