/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../../styles/Home/Education.module.css";
import {BookmarkIcon, BriefcaseIcon, TrophyIcon, UserGroupIcon} from "@heroicons/react/24/solid";

export type TimelineAdditionalDetailsProps = {
	grade?: string,
	courses?: string,
	activities?: string,
	achievements?: string,
	children?: JSX.Element | JSX.Element[]
}

export default function TimelineAdditionalDetails( props: TimelineAdditionalDetailsProps ) {
	return (
		<div className={styles.timelineAdditionalDetails}>
			{props.grade && <div className={styles.grade}><BookmarkIcon className={styles.detailIcon}/> <span className={styles.detailContent}>Grade: {props.grade}</span></div>}
			{props.courses && <div className={styles.courses}><BriefcaseIcon className={styles.detailIcon}/> <span className={styles.detailContent}>Courses: {props.courses}</span></div>}
			{props.activities && <div className={styles.activities}><UserGroupIcon className={styles.detailIcon}/><span className={styles.detailContent}>Activities: {props.activities}</span></div>}
			{props.achievements && <div className={styles.achievements}><TrophyIcon className={styles.detailIcon}/><span className={styles.detailContent}>Achievements: {props.achievements}</span></div>}
			{props.children}
		</div>
	);
}