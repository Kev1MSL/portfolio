/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import { FC } from "react";
import styles from "../../styles/Buttons/PrimaryButton.module.css";

type Props = {
	top: string;
	left: string;
	id?: string;
};

export const RipplePrimary: FC<Props> = ({ top, left, id }) => (
	<span style={{ top, left }} id={`ripple-shape-${id}`} className={styles.rippleShape}></span>
);

