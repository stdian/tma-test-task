import { AppDispatch, AppGetState } from "features/Store";

import { appSlice } from "./App.reducer";
import { selectAppInited } from "./App.selectors";

export const { appSetInited } = appSlice.actions;

export const appInit =
	() => async (dispatch: AppDispatch, getState: AppGetState) => {
		const appInited = selectAppInited(getState());
		if (appInited) {
			return;
		}

		try {
			dispatch(appSetInited(true));
			console.info("App initialized");
		} catch (e) {
			console.error("App initialization error");
			console.warn(e);
		}
	};
