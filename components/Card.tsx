/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../styles/Card.module.css";

export type CardProps = {
	title?: string,
	className?: string,
	children: JSX.Element | JSX.Element[]
}

export default function Card( props: CardProps ) {
	return(
		<div className={`${styles.card} ${props.className}`}>
			<div className={styles.cardContent}>
				{props.children}
			</div>

		</div>
	);
}
