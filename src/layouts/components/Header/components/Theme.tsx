import { Drawer, Divider, Switch, message } from "antd";
import { useState } from "react";
import { RootState, useDispatch, useSelector } from "@/redux";
import { FireOutlined, SettingOutlined } from "@ant-design/icons";
import { setWeakOrGray, setBreadcrumb, setTabs, setFooter, setSiderTheme } from "@/redux/modules/global";
import { updateCollapse } from "@/redux/modules/menu";

const Theme = () => {
	const dispatch = useDispatch();
	const { weakOrGray, breadcrumb, tabs, footer, siderTheme } = useSelector((state: RootState) => state.global.themeConfig);
	const { isCollapse } = useSelector((state: RootState) => state.menu);
	const [visible, setVisible] = useState<boolean>(false);

	const onChange = (checked: boolean, theme: string) => {
		if (checked) return dispatch(setWeakOrGray(theme));
		dispatch(setWeakOrGray(""));
	};

	return (
		<>
			<i
				className="icon-style iconfont icon-zhuti"
				onClick={() => {
					setVisible(true);
				}}
			></i>
			<Drawer
				title="布局设置"
				closable={false}
				onClose={() => {
					setVisible(false);
				}}
				open={visible}
				width={320}
			>
				<Divider className="divider">
					<FireOutlined />
					全局主题
				</Divider>
				<div className="theme-item">
					<span>暗黑模式（未完成）</span>
					<Switch
						checkedChildren={<>🌞</>}
						unCheckedChildren={<>🌜</>}
						onChange={() => {
							message.success("欢迎提交 pull request ✨");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>灰色模式</span>
					<Switch
						checked={weakOrGray === "gray"}
						onChange={e => {
							onChange(e, "gray");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>色弱模式</span>
					<Switch
						checked={weakOrGray === "weak"}
						onChange={e => {
							onChange(e, "weak");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>侧边栏主题</span>
					<Switch
						checked={siderTheme === "dark"}
						checkedChildren={<>🌞</>}
						unCheckedChildren={<>🌜</>}
						onChange={() => {
							dispatch(setSiderTheme(siderTheme === "dark" ? "light" : "dark"));
						}}
					/>
				</div>
				{/* 界面设置 */}
				<Divider className="divider">
					<SettingOutlined />
					界面设置
				</Divider>
				<div className="theme-item">
					<span>折叠菜单</span>
					<Switch
						checked={!isCollapse}
						onChange={() => {
							dispatch(updateCollapse(!isCollapse));
						}}
					/>
				</div>
				<div className="theme-item">
					<span>面包屑导航</span>
					<Switch
						checked={breadcrumb}
						onChange={() => {
							dispatch(setBreadcrumb(!breadcrumb));
						}}
					/>
				</div>
				<div className="theme-item">
					<span>标签栏</span>
					<Switch
						checked={tabs}
						onChange={() => {
							dispatch(setTabs(!tabs));
						}}
					/>
				</div>
				<div className="theme-item">
					<span>页脚</span>
					<Switch
						checked={footer}
						onChange={() => {
							dispatch(setFooter(!footer));
						}}
					/>
				</div>
			</Drawer>
		</>
	);
};

export default Theme;
