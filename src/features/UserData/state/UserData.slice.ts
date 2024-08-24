import { LocalizationTypes } from "features/Localization/Localization.model";

export const USER_DATA_STORE_KEY = "userData";

export interface UserDataSlice {
	language: LocalizationTypes;
}
