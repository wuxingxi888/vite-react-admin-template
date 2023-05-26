import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { RootState, useDispatch, useSelector } from "@/redux";
import { updateCollapse } from "@/redux/modules/menu";
import { Button } from "antd";

const CollapseIcon = () => {
	const dispatch = useDispatch();
	const { isCollapse } = useSelector((state: RootState) => state.menu);

	return (
		<Button
			type="text"
			icon={isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			onClick={() => {
				dispatch(updateCollapse(!isCollapse));
			}}
		/>
	);
};

export default CollapseIcon;
