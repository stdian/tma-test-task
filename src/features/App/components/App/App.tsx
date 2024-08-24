import { SDKProvider } from "@telegram-apps/sdk-react";

import { EnvironmentTypes, environmentEnv } from "features/Environment";
import {
	LocalizationProvider,
	LocalizationSelect,
} from "features/Localization";
import { Router } from "features/Router";

const App = () => {
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
