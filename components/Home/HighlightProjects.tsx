/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../styles/Home/HighlightProjects.module.css";

export default function HighlightProjects(){
	return(
		<div className={styles.contentContainer}>
			<h2 className={styles.title}>My Featured Projects</h2>
			<div className={styles.content}>
				<div>
					My current tech stack
				</div>
				<div>
					Projects
				</div>
			</div>
		</div>
	);
}