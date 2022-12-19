/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import {ArrowRightCircleIcon} from "@heroicons/react/20/solid";
import styles from "../../../styles/Home/ExperienceAndAchievement.module.css";

export type ExperienceDetailsProps = {
	description: string[]
};
export default function ExperienceDetails(props: ExperienceDetailsProps) {
	return (
		<div>
			{props.description.map((item, index) => {
				return <p key={index} className={styles.detailContent}><ArrowRightCircleIcon
					className={styles.detailIcon}/> {item}</p>
			})}
		</div>
	);
}