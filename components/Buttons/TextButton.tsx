/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../styles/Buttons/TextButton.module.css";
import {createRoot} from "react-dom/client";
import {RipplePrimary} from "./RipplePrimary";
import React from "react";
import {RippleTextButton} from "./RippleTextButton";

export type TextButtonProps = {
	title: string,
	className?: string,
	onClick?: () => void,
	id: string
}

export default function TextButton( props: TextButtonProps ) {
	const handleClick = (e:any) => {
		if (!document.getElementById(`ripple-shape-${props.id}`)) {
			props.onClick && props.onClick();
			const btn: HTMLButtonElement = e?.currentTarget;
			const rect: DOMRect = btn.getBoundingClientRect();
			const top = `${e.clientY - rect.y}px`;
			const left = `${e.clientX - rect.x}px`;
			const container = createRoot(
				document.getElementById(`ripple-${props.id}`)!
			);
			container.render(<RippleTextButton top={top} left={left} id={props.id} />);

			setTimeout(() => {
				container.unmount();
			}, 500);
		}
	};
	return (
		<button className={`${styles.textButton} ${props.className}`} onClick={handleClick}>
			<span className={styles.content}>{props.title}</span>
			<span id={`ripple-${props.id}`}></span>
		</button>
	);
}

