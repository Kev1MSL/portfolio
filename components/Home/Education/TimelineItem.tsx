/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../../styles/Home/Education.module.css";
import Card from "../../Card";
import TextButton from "../../Buttons/TextButton";
import {MapPinIcon} from "@heroicons/react/24/outline";
import {AcademicCapIcon} from "@heroicons/react/24/solid";


export type TimelineItemProps = {
	date: string,
	location: string,
	school: string,
	degree: string,
}

export default function TimelineItem( props: TimelineItemProps ) {
	return (
		<Card className={styles.timelineItemContent}>
			<div className={styles.timelineItemLocDate}>
				<span className={styles.date}>{props.date}</span>
				<span className={styles.location}><MapPinIcon className={styles.locationIcon}/> {props.location}</span>
			</div>
			<div className={styles.timelineItemDetails}>
				<h3 className={styles.school}>{props.school}</h3>
				<p className={styles.degree}><AcademicCapIcon className={styles.degreeIcon}/> {props.degree}</p>
				<TextButton id={`${props.school}-viewmore`} title={"View more"} className={styles.viewMore}/>
			</div>
		</Card>
	);
}
