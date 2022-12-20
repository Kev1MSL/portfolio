/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../../styles/Home/Education.module.css";
import Card from "../../Card";
import TextButton from "../../Buttons/TextButton";
import {MapPinIcon} from "@heroicons/react/24/outline";
import {AcademicCapIcon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";
import TimelineAdditionalDetails, {TimelineAdditionalDetailsProps} from "./TimelineAdditionalDetails";
import AnimateHeight from "react-animate-height";

export type TimelineItemProps = {
    date: string;
    location: string;
    school: string;
    degree: string;
    details?: TimelineAdditionalDetailsProps;
};

function getWindowDimensions() {
    if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    }
    return {
        width: 0,
        height: 0,
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export default function TimelineItem(props: TimelineItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { width } = useWindowDimensions();
    let isMobile: boolean = width < 768;
    let height: number = isMobile ? 200 : 168;

    return (
        <Card className={isExpanded ? styles.timelineItemContentExpanded : styles.timelineItemContent}>
            <AnimateHeight height={isExpanded ? "auto" : height} animateOpacity={true}>
                <div className={styles.timelineItemLocDate}>
                    <span className={styles.date}>{props.date}</span>
                    <span className={styles.location}>
                        <MapPinIcon className={styles.locationIcon} /> {props.location}
                    </span>
                </div>
                <div className={styles.timelineItemDetails}>
                    <h3 className={styles.school}>{props.school}</h3>
                    <p className={styles.degree}>
                        <AcademicCapIcon className={styles.degreeIcon} /> {props.degree}
                    </p>
                    {isExpanded && <TimelineAdditionalDetails {...props.details} />}
                    <TextButton
                        id={`${props.school}-viewmore`}
                        title={isExpanded ? "View less" : "View more"}
                        className={isExpanded ? styles.viewLess : styles.viewMore}
                        onClick={() => {
                            setIsExpanded(!isExpanded);
                        }}
                    />
                </div>
            </AnimateHeight>
        </Card>
    );
}
