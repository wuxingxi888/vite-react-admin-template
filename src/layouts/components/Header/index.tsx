import { RootState, useSelector } from "@/redux";
import { Layout, theme } from "antd";
import AvatarIcon from "./components/AvatarIcon";
import CollapseIcon from "./components/CollapseIcon";
import BreadcrumbNav from "./components/BreadcrumbNav";
import AssemblySize from "./components/AssemblySize";
import Language from "./components/Language";
import Theme from "./components/Theme";
import Fullscreen from "./components/Fullscreen";
import "./index.less";

const LayoutHeader = () => {
	const { Header } = Layout;
	const { breadcrumb } = useSelector((state: RootState) => state.global.themeConfig);

	const {
		token: { colorBgContainer }
	} = theme.useToken();

	return (
		<Header style={{ background: colorBgContainer }}>
			<div className="header-lf">
				<CollapseIcon />
				{breadcrumb && <BreadcrumbNav />}
			</div>
			<div className="header-ri">
				<AssemblySize />
				<Language />
				<Theme />
				<Fullscreen />
				<span className="username">Hooks</span>
				<AvatarIcon />
			</div>
		</Header>
	);
};

export default LayoutHeader;
