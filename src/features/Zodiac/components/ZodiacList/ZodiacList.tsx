import { useCallback, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { LocalizationTypes } from "features/Localization/Localization.model.ts";
import { selectUserDataLanguage } from "features/UserData/state/UserData.selectors.ts";
import {
	IZodiacList,
	ZodiacType,
	zodiacDates,
	zodiacIcons,
} from "features/Zodiac";

import { clientZodiacGetList } from "../../Zodiac.client";
import styles from "./ZodiacList.module.scss";

const ZodiacList = () => {
	const { formatMessage } = useIntl();
	const [zodiacList, setZodiacList] = useState<IZodiacList | null>(null);
	const userDataLanguage = useSelector(selectUserDataLanguage);

	const handleLoad = useCallback(async () => {
		const response = await clientZodiacGetList(
			userDataLanguage === LocalizationTypes.Russian
				? "original"
				: "translated",
		);
		setZodiacList(response);
	}, [userDataLanguage]);

	useEffect(() => {
		(async () => {
			await handleLoad();
		})();
	}, [handleLoad]);

	if (!zodiacList) {
		return null;
	}

	return (
		<div className={styles.container}>
			{Object.keys(zodiacList?.horoscope)?.map((sign, index) => (
				<Link
					to={`/sign/${sign}`}
					className={styles.zodiak_item}
					key={index}>
					<p className={styles.title}>
						{formatMessage({ id: `zodiac.${sign}` })}
					</p>
					<img
						src={zodiacIcons[sign as ZodiacType]}
						className={styles.icon}
					/>
					<p className={styles.date}>
						{zodiacDates[sign as ZodiacType]}
					</p>
				</Link>
			))}
		</div>
	);
};

export { ZodiacList };
