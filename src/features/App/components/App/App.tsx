import { SDKProvider, postEvent } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

import { EnvironmentTypes, environmentEnv } from "features/Environment";
import {
	LocalizationProvider,
	LocalizationSelect,
} from "features/Localization";
import { Router } from "features/Router";

const App = () => {
	useEffect(() => {
		postEvent("web_app_expand");
	});

	return (
		<SDKProvider debug={environmentEnv !== EnvironmentTypes.Production}>
			<LocalizationProvider>
				<LocalizationSelect />
				<Router />
			</LocalizationProvider>
		</SDKProvider>
	);
};

export { App };
