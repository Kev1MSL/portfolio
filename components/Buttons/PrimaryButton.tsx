/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */
import {render} from "react-dom";
import styles from "../../styles/PrimaryButton.module.css";
import theme from "tailwindcss/defaultTheme";
import React from "react";

export default function PrimaryButton(props: any) {
	const [coords, setCoords] = React.useState({x: -1, y: -1});
	const [isRippling, setIsRippling] = React.useState(false);

	React.useEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true);
			setTimeout(() => setIsRippling(false), 300);
		} else setIsRippling(false);
	}, [coords]);

	React.useEffect(() => {
		if (!isRippling) setCoords({x: -1, y: -1});
	}, [isRippling]);
	return (
		<button onClick={(e: any) => {
			const rect = e.target.getBoundingClientRect();
			setCoords({x: e.clientX - rect.left, y: e.clientY - rect.top});
			props.onClick();
		}} className={`${styles.primaryButton} ${props.className}`}>
			{isRippling ? (
				<span
					className={styles.ripple}
					style={{
						left: coords.x,
						top: coords.y
					}}
				/>
			) : (
				''
			)}
			<span className={styles.content}>{props.title}</span>{props.icon}</button>

	);
}
