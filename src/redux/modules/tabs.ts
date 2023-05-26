import { TabsOptions, TabsState } from "@/redux/interface";
import { HOME_URL } from "@/config/config";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tabsState: TabsState = {
	// tabsActive 其实没啥用，使用 pathname 就可以了😂
	tabsActive: HOME_URL,
	tabsList: [{ key: HOME_URL, label: "首页", path: HOME_URL, closable: false }]
};

const tabsSlice = createSlice({
	name: "tabs",
	initialState: tabsState,
	reducers: {
		setTabsList(state: TabsState, { payload }: PayloadAction<TabsOptions[]>) {
			state.tabsList = payload;
		},
		setTabsActive(state: TabsState, { payload }: PayloadAction<string>) {
			state.tabsActive = payload;
		}
	}
});

export const { setTabsList, setTabsActive } = tabsSlice.actions;
export default tabsSlice.reducer;
