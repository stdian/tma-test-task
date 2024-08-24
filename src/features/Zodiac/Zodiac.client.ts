import { apiUrl } from "features/Environment";

import { IZodiac, IZodiacList, ZodiacType } from "./Zodiac.model.ts";

export const clientZodiacGetList = async (
	language: "original" | "translated",
) => {
	const response = await fetch(apiUrl, {
		method: "POST",
		body: JSON.stringify({
			language,
			period: "today",
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	return (await response.json()) as IZodiacList;
};

export const clientZodiacGetItem = async (
	sign: ZodiacType,
	language: "original" | "translated",
) => {
	const response = await fetch(apiUrl, {
		method: "POST",
		body: JSON.stringify({
			sign: sign,
			language,
			period: "today",
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	return (await response.json()) as IZodiac;
};
