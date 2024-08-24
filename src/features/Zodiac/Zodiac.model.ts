import aquariusIcon from "assets/aquarius.svg";
import ariesIcon from "assets/aries.svg";
import cancerIcon from "assets/cancer.svg";
import capricornIcon from "assets/capricorn.svg";
import geminiIcon from "assets/gemini.svg";
import leoIcon from "assets/leo.svg";
import libraIcon from "assets/libra.svg";
import piscesIcon from "assets/pisces.svg";
import sagittariusIcon from "assets/sagittarius.svg";
import scorpioIcon from "assets/scorpio.svg";
import taurusIcon from "assets/taurus.svg";
import virgoIcon from "assets/virgo.svg";

export enum ZodiacType {
	Aries = "aries",
	Taurus = "taurus",
	Gemini = "gemini",
	Cancer = "cancer",
	Leo = "leo",
	Virgo = "virgo",
	Libra = "libra",
	Scorpio = "scorpio",
	Sagittarius = "sagittarius",
	Capricorn = "capricorn",
	Aquarius = "aquarius",
	Pisces = "pisces",
}

export const zodiacIcons = {
	[ZodiacType.Aries]: ariesIcon,
	[ZodiacType.Taurus]: taurusIcon,
	[ZodiacType.Gemini]: geminiIcon,
	[ZodiacType.Cancer]: cancerIcon,
	[ZodiacType.Leo]: leoIcon,
	[ZodiacType.Virgo]: virgoIcon,
	[ZodiacType.Libra]: libraIcon,
	[ZodiacType.Scorpio]: scorpioIcon,
	[ZodiacType.Sagittarius]: sagittariusIcon,
	[ZodiacType.Capricorn]: capricornIcon,
	[ZodiacType.Aquarius]: aquariusIcon,
	[ZodiacType.Pisces]: piscesIcon,
};

export const zodiacDates = {
	[ZodiacType.Aries]: "21.03 — 20.04",
	[ZodiacType.Taurus]: "21.04 — 20.05",
	[ZodiacType.Gemini]: "21.05 — 21.06",
	[ZodiacType.Cancer]: "22.06 — 22.07",
	[ZodiacType.Leo]: "23.07 — 23.08",
	[ZodiacType.Virgo]: "24.08 — 23.09",
	[ZodiacType.Libra]: "24.09 — 23.10",
	[ZodiacType.Scorpio]: "24.10 — 22.11",
	[ZodiacType.Sagittarius]: "23.11 — 21.12",
	[ZodiacType.Capricorn]: "22.12 — 20.01",
	[ZodiacType.Aquarius]: "21.01 — 20.02",
	[ZodiacType.Pisces]: "21.02 — 20.03",
};

export interface IZodiac {
	sign: ZodiacType;
	language: "original" | "translated";
	period: string;
	horoscope: string;
}

export interface IZodiacList {
	language: "original" | "translated";
	period: string;
	horoscope: {
		[ZodiacType.Aries]: string;
		[ZodiacType.Taurus]: string;
		[ZodiacType.Gemini]: string;
		[ZodiacType.Cancer]: string;
		[ZodiacType.Leo]: string;
		[ZodiacType.Virgo]: string;
		[ZodiacType.Libra]: string;
		[ZodiacType.Scorpio]: string;
		[ZodiacType.Sagittarius]: string;
		[ZodiacType.Capricorn]: string;
		[ZodiacType.Aquarius]: string;
		[ZodiacType.Pisces]: string;
	};
}
