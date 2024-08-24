/* eslint-disable react-refresh/only-export-components */
import loadableComponent from "@loadable/component";
import { Navigate } from "react-router-dom";

import { RouteTypes } from "interfaces";

const Main = loadableComponent(() => import("features/Main"), {
	resolveComponent: components => components["Main"],
});
const ZodiacItem = loadableComponent(
	() => import("features/Zodiac/components/ZodiacItem"),
	{
		resolveComponent: components => components["ZodiacItem"],
	},
);

export const routes = [
	{
		path: RouteTypes.Main,
		element: <Main />,
	},
	{
		path: RouteTypes.Sign,
		element: <ZodiacItem />,
	},
	{
		path: "*",
		element: <Navigate to={RouteTypes.Main} />,
	},
];

export const ROUTER_BASE_PATH = "/";
