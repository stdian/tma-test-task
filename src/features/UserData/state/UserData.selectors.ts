import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "features/Store";

import { USER_DATA_STORE_KEY } from "./UserData.slice";

const selectUserDataSlice = (state: AppState) => state[USER_DATA_STORE_KEY];

export const selectUserDataLanguage = createSelector(
	selectUserDataSlice,
	slice => slice.language,
);
