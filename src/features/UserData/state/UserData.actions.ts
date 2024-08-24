import { LocalizationTypes } from "features/Localization/Localization.model.ts";
import { AppDispatch } from "features/Store";

import { userDataSlice } from "./UserData.reducer";

export const { setUserDataLanguage } = userDataSlice.actions;

export const userDataSelectLanguage =
	(language: LocalizationTypes) => async (dispatch: AppDispatch) => {
		dispatch(setUserDataLanguage(language));
	};
