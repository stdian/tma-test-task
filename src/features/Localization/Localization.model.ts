import enLocale from "./locales/en.json";
import ruLocale from "./locales/ru.json";

export enum LocalizationTypes {
	Russian = "ru",
	English = "en",
}

export const DEFAULT_LOCALE = LocalizationTypes.English;

const RU = ruLocale;
const EN = enLocale;

export const LocalizationFiles = {
	[LocalizationTypes.Russian]: RU,
	[LocalizationTypes.English]: EN,
};

export const getLocalizationFiles = () => {
	return LocalizationFiles;
};
