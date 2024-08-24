import { useCallback } from "react";
import { useSelector } from "react-redux";

import { uc } from "utils";

import { LocalizationTypes } from "features/Localization/Localization.model";
import { useAppDispatch } from "features/Store";
import { userDataSelectLanguage } from "features/UserData/state/UserData.actions";
import { selectUserDataLanguage } from "features/UserData/state/UserData.selectors.ts";

import styles from "./LocalizationSelect.module.scss";

const LocalizationSelect = () => {
	const dispatch = useAppDispatch();
	const userDataLanguage = useSelector(selectUserDataLanguage);

	const handleChange = useCallback(
		(language: LocalizationTypes) => () => {
			dispatch(userDataSelectLanguage(language));
		},
		[dispatch],
	);

	return (
		<div className={styles.container}>
			{Object.entries(LocalizationTypes).map((item, index) => (
				<div
					className={`${styles.language_item} ${userDataLanguage === item[1] && styles.active}`}
					onClick={handleChange(item[1])}
					key={index}>
					{uc(item[1])}
				</div>
			))}
		</div>
	);
};

export { LocalizationSelect };
