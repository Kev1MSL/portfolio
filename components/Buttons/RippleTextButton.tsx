/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import { FC } from "react";
import styles from "../../styles/Buttons/TextButton.module.css";

type Props = {
	top: string;
	left: string;
	id?: string;
};

export const RippleTextButton: FC<Props> = ({ top, left, id }) => (
	<span style={{ top, left }} id={`ripple-shape-${id}`} className={styles.rippleShape}></span>
);

