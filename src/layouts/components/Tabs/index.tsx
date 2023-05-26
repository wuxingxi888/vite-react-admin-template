import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { setTabsList } from "@/redux/modules/tabs";
import { RootState, useDispatch, useSelector } from "@/redux";
import { routerArray } from "@/routers";
import { searchRoute } from "@/utils/util";
import MoreButton from "./components/MoreButton";
import "./index.less";
import { TabsOptions } from "@/redux/interface";

const LayoutTabs = () => {
	const dispatch = useDispatch();
	const { tabsList } = useSelector((state: RootState) => state.tabs);

	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [activeValue, setActiveValue] = useState<string>(pathname);

	useEffect(() => {
		addTabs();
	}, [pathname]);

	// click tabs
	const clickTabs = (path: string) => {
		navigate(path);
	};

	// add tabs
	const addTabs = () => {
		const route = searchRoute(pathname, routerArray);
		let newTabsList = JSON.parse(JSON.stringify(tabsList));
		if (tabsList.every((item: any) => item.path !== route.path)) {
			newTabsList.push({ key: route.path, label: route.meta!.title, path: route.path, closable: route.path != HOME_URL });
		}
		dispatch(setTabsList(newTabsList));
		setActiveValue(pathname);
	};

	// delete tabs
	const delTabs = (tabPath: string) => {
		if (tabPath === HOME_URL) return;
		if (pathname === tabPath) {
			tabsList.forEach((item: TabsOptions, index: number) => {
				if (item.path !== pathname) return;
				const nextTab = tabsList[index + 1] || tabsList[index - 1];
				if (!nextTab) return;
				navigate(nextTab.path);
			});
		}
		dispatch(setTabsList(tabsList.filter((item: TabsOptions) => item.path !== tabPath)));
	};

	return (
		<div className="tabs">
			<Tabs
				activeKey={activeValue}
				onChange={clickTabs}
				hideAdd
				type="editable-card"
				size="small"
				onEdit={path => {
					delTabs(path as string);
				}}
				items={tabsList}
				tabBarExtraContent={<MoreButton delTabs={delTabs}></MoreButton>}
			/>
		</div>
	);
};

export default LayoutTabs;
