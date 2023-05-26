import { GlobalState } from "@/redux/interface";
import type { SizeType } from "antd/lib/config-provider/SizeContext";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SiderTheme } from "antd/es/layout/Sider";

const globalState: GlobalState = {
	token: "",
	userInfo: "",
	assemblySize: "middle",
	language: "",
	themeConfig: {
		primary: "#1890ff",
		isDark: true,
		weakOrGray: "",
		siderTheme: "dark",
		breadcrumb: true,
		tabs: true,
		footer: true
	}
};

const globalSlice = createSlice({
	name: "global",
	initialState: globalState,
	reducers: {
		setToken(state: GlobalState, { payload }: PayloadAction<string>) {
			state.token = payload;
		},
		setAssemblySize(state: GlobalState, { payload }: PayloadAction<SizeType>) {
			state.assemblySize = payload;
		},
		setLanguage(state: GlobalState, { payload }: PayloadAction<string>) {
			state.language = payload;
		},
		setDark(state: GlobalState, { payload }: PayloadAction<boolean>) {
			state.themeConfig.isDark = payload;
		},
		setWeakOrGray(state: GlobalState, { payload }: PayloadAction<string>) {
			state.themeConfig.weakOrGray = payload;
		},
		setBreadcrumb(state: GlobalState, { payload }: PayloadAction<boolean>) {
			state.themeConfig.breadcrumb = payload;
		},
		setTabs(state: GlobalState, { payload }: PayloadAction<boolean>) {
			state.themeConfig.tabs = payload;
		},
		setFooter(state: GlobalState, { payload }: PayloadAction<boolean>) {
			state.themeConfig.footer = payload;
		},
		setSiderTheme(state: GlobalState, { payload }: PayloadAction<SiderTheme>) {
			state.themeConfig.siderTheme = payload;
		}
	}
});

export const {
	setToken,
	setAssemblySize,
	setLanguage,
	setDark,
	setWeakOrGray,
	setBreadcrumb,
	setTabs,
	setFooter,
	setSiderTheme
} = globalSlice.actions;
export default globalSlice.reducer;
