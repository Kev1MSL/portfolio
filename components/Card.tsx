/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../styles/Card.module.css";

export type CardProps = {
	className?: string,
	children: JSX.Element | JSX.Element[]
}

export default function Card( props: CardProps ) {
	return(
		<div className={`${styles.container} ${props.className}`}>
			<div className={styles.content}>
				{props.children}
			</div>

		</div>
	);
}
