/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../styles/Buttons/TextButton.module.css";
import React from "react";
import { RippleTextButton } from "./RippleTextButton";

export type TextButtonProps = {
    title: string;
    className?: string;
    onClick?: () => void;
};

export default function TextButton(props: TextButtonProps) {
    const [isRippling, setIsRippling] = React.useState(false);
    const [coords, setCoords] = React.useState({ x: "-1px", y: "-1px" });
    React.useEffect(() => {
        if (coords.x !== "-1px" && coords.y !== "-1px") {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 500);
        } else setIsRippling(false);
    }, [coords]);

    React.useEffect(() => {
        if (!isRippling) setCoords({ x: "-1px", y: "-1px" });
    }, [isRippling]);

    const handleClick = (e: any) => {
        props.onClick && props.onClick();
        const btn: HTMLButtonElement = e?.currentTarget;
        const rect: DOMRect = btn.getBoundingClientRect();
        const top = `${e.clientY - rect.y}px`;
        const left = `${e.clientX - rect.x}px`;
        setCoords({ x: left, y: top });
    };
    return (
        <button className={`${styles.textButton} ${props.className}`} onClick={handleClick}>
            <span className={styles.content}>{props.title}</span>
            {isRippling && <RippleTextButton top={coords.y} left={coords.x} />}
        </button>
    );
}
