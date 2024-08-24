import { combineReducers } from "redux";

import { appReducer } from "features/App/state/App.reducer";
import { APP_STORE_KEY } from "features/App/state/App.slice";
import { userDataReducer } from "features/UserData/state/UserData.reducer.ts";
import { USER_DATA_STORE_KEY } from "features/UserData/state/UserData.slice.ts";

const reducers = {
	[APP_STORE_KEY]: appReducer,
	[USER_DATA_STORE_KEY]: userDataReducer,
};

export const StoreReducer = combineReducers(reducers);
