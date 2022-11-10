/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import { FC } from "react";
import styles from "../../styles/Buttons/PrimaryButton.module.css";

type Props = {
	top: string;
	left: string;
};

export const RipplePrimary: FC<Props> = ({ top, left}) => (
	<span style={{ top, left }} className={styles.rippleShape}></span>
);

