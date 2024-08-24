import { initBackButton } from "@telegram-apps/sdk-react";
import { useCallback, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import { LocalizationTypes } from "features/Localization/Localization.model.ts";
import { selectUserDataLanguage } from "features/UserData/state/UserData.selectors.ts";
import { ZodiacType } from "features/Zodiac";
import { clientZodiacGetItem } from "features/Zodiac/Zodiac.client.ts";

import styles from "./ZodiacItem.module.scss";

const ZodiacItem = () => {
	const { sign } = useParams<{ sign: ZodiacType }>();
	const navigate = useNavigate();
	const { formatMessage } = useIntl();
	const userDataLanguage = useSelector(selectUserDataLanguage);
	const [backButton, cleanup] = initBackButton();
	const [horoscope, setHoroscope] = useState<string>("");

	const handlers = useSwipeable({
		onSwipedRight: () => {
			navigate(-1);
		},
		trackTouch: true,
	});

	const handleLoad = useCallback(async () => {
		if (!sign) {
			return;
		}

		const response = await clientZodiacGetItem(
			sign,
			userDataLanguage === LocalizationTypes.Russian
				? "original"
				: "translated",
		);
		setHoroscope(response.horoscope);
	}, [sign, userDataLanguage]);

	const handleBack = useCallback(() => {
		navigate(-1);
	}, [navigate]);

	useEffect(() => {
		backButton.show();
		backButton.on("click", handleBack);

		return () => {
			backButton.hide();
			cleanup();
		};
	}, []);

	useEffect(() => {
		(async () => {
			await handleLoad();
		})();
	}, [handleLoad]);

	return (
		<div className={styles.container} {...handlers}>
			<p className={styles.title}>
				{formatMessage({ id: `zodiac.${sign}` })}
			</p>
			<p className={styles.text}>{horoscope}</p>
		</div>
	);
};

export { ZodiacItem };
