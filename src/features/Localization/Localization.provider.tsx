import { useInitData } from "@telegram-apps/sdk-react";
import { PropsWithChildren, useEffect, useMemo } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";

import { useAppDispatch } from "features/Store";
import { setUserDataLanguage } from "features/UserData/state/UserData.actions.ts";
import { selectUserDataLanguage } from "features/UserData/state/UserData.selectors.ts";

import {
	LocalizationTypes,
	getLocalizationFiles,
} from "./Localization.model.ts";

const LocalizationProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useAppDispatch();
	const WebApp = useInitData();
	const userDataLanguage = useSelector(selectUserDataLanguage);

	const telegramLocale = useMemo(() => WebApp?.user?.languageCode, [WebApp]);

	useEffect(() => {
		if (telegramLocale) {
			if (
				Object.values(LocalizationTypes).find(
					item => item === telegramLocale,
				)
			) {
				dispatch(
					setUserDataLanguage(telegramLocale as LocalizationTypes),
				);
				return;
			}
			dispatch(setUserDataLanguage(LocalizationTypes.English));
		}
	}, [telegramLocale, dispatch]);

	return (
		<IntlProvider
			locale={userDataLanguage}
			defaultLocale="en"
			messages={getLocalizationFiles()[userDataLanguage]}>
			{children}
		</IntlProvider>
	);
};

export { LocalizationProvider };
