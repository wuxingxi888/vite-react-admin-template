import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { RootState, useDispatch, useSelector } from "@/redux";
import { setLanguage } from "@/redux/modules/global";

const Language = () => {
	const dispatch = useDispatch();
	const { language } = useSelector((state: RootState) => state.global);

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: <span>简体中文</span>,
			onClick: () => dispatch(setLanguage("zh")),
			disabled: language === "zh"
		},
		{
			key: "2",
			label: <span>English</span>,
			onClick: () => dispatch(setLanguage("en")),
			disabled: language === "en"
		}
	];

	return (
		<Dropdown menu={{ items }} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-zhongyingwen"></i>
		</Dropdown>
	);
};

export default Language;
