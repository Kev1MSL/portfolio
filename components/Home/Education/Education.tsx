/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../../styles/Home/Education.module.css";
import Card from "../../Card";
import TimelineItem from "./TimelineItem";

export default function Education() {
	return (
		<div className={styles.education}>
			<h2 className={styles.educationTitle}>My Education</h2>
			<div className={styles.educationContent}>
				<ul className={styles.timeline}>
					<li className={styles.timelineItem}>
						<TimelineItem date={"2020 - 2023"} location={"Palaiseau, France"} school={"Ecole Polytechnique (l'X)"}
						              degree={"Bachelor of Science — Majors Maths & Computer Science"}/>
					</li>
					<li className={styles.timelineItem}>
						<TimelineItem date={"2017 - 2020"} location={"Cannes, France"} school={"Lycée Jules Ferry"} degree={"Baccalauréat Scientifique — Option Engineering Science"}/>
					</li>
				</ul>
			</div>
		</div>
	);
}