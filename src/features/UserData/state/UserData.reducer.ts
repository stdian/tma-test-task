import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LocalizationTypes } from "features/Localization/Localization.model.ts";

import { USER_DATA_STORE_KEY, UserDataSlice } from "./UserData.slice";

const initialState: UserDataSlice = {
	language: LocalizationTypes.English,
};

export const userDataSlice = createSlice({
	name: USER_DATA_STORE_KEY,
	initialState,
	reducers: {
		setUserDataLanguage: (
			state,
			{ payload }: PayloadAction<LocalizationTypes>,
		) => {
			state.language = payload;
		},
	},
});

export const userDataReducer = userDataSlice.reducer;
