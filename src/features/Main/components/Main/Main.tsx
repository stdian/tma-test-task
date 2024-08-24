import { useIntl } from "react-intl";

import { ZodiacList } from "features/Zodiac";

import styles from "./Main.module.scss";

const Main = () => {
	const { formatMessage } = useIntl();

	return (
		<div className={styles.container}>
			<p className={styles.title}>
				{formatMessage({ id: "main.title" })}
			</p>
			<ZodiacList />
		</div>
	);
};

export { Main };
