import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import Login from "@/views/login/index";

// * 导入所有router
const modules = import.meta.globEager("./modules/*.tsx");

// * 处理路由
export const routerArray: RouteObject[] = [];

Object.keys(modules).forEach(k => {
	const moduleRoutes = modules[k] as Record<string, any>;
	Object.keys(moduleRoutes).forEach(v => {
		const routes = moduleRoutes[v] as Array<{ path: string; component: React.ComponentType<any> }>;
		routerArray.push(...routes);
	});
});

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	...routerArray,
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
