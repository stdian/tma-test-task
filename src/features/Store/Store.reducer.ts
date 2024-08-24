import { combineReducers } from "redux";

import { userDataReducer } from "features/UserData/state/UserData.reducer.ts";
import { USER_DATA_STORE_KEY } from "features/UserData/state/UserData.slice.ts";

const reducers = {
	[USER_DATA_STORE_KEY]: userDataReducer,
};

export const StoreReducer = combineReducers(reducers);
