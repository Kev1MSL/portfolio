/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../styles/Pill.module.css";

export type PillProps = {
	className?: string,
	children?: JSX.Element | JSX.Element[]
}

export default function Pill( props: PillProps ) {
	return (
		<div className={`${styles.pill} ${props.className}`}>
			{props.children}
		</div>
	);
}