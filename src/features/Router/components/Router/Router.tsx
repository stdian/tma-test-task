import { useIntegration } from "@telegram-apps/react-router-integration";
import { initNavigator } from "@telegram-apps/sdk-react";
import { useEffect, useMemo } from "react";
import { Router as ReactRouter, Route, Routes } from "react-router-dom";

import { ROUTER_BASE_PATH, routes } from "../../Router.model";

const Router: React.FC = () => {
	const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
	const [location, reactNavigator] = useIntegration(navigator);

	useEffect(() => {
		navigator.attach();
		return () => navigator.detach();
	}, [navigator]);

	return (
		<ReactRouter
			location={location}
			navigator={reactNavigator}
			basename={ROUTER_BASE_PATH}>
			<Routes>
				{routes.map(route => (
					<Route key={route.path} {...route} />
				))}
			</Routes>
		</ReactRouter>
	);
};

export { Router };
