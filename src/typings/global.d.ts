// * Menu
declare namespace Menu {
	interface MenuOptions {
		path: string;
		title: string;
		icon?: string;
		isLink?: string;
		close?: boolean;
		children?: MenuOptions[];
	}
}

// * Vite
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
	VITE_API_URL: string;
	VITE_OUTPUT_DIR: string;
	VITE_PUBLIC_PATH: string;
	VITE_PROXY: [string, string][];
	VITE_REPORT: boolean;
	VITE_BUILD_COMPRESS: "gzip" | "brotli" | "none";
	VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
}

// * Dropdown MenuInfo
declare interface MenuInfo {
	key: string;
	keyPath: string[];
	/** @deprecated This will not support in future. You should avoid to use this */
	item: React.ReactInstance;
	domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
