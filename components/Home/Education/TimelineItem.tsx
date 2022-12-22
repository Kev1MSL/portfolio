/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../../styles/Home/Education.module.css";
import Card from "../../Card";
import TextButton from "../../Buttons/TextButton";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import TimelineAdditionalDetails, { TimelineAdditionalDetailsProps } from "./TimelineAdditionalDetails";
import AnimateHeight from "react-animate-height";

export type TimelineItemProps = {
    date: string;
    dateSmall: string;
    location: string;
    locationSmall: string;
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
    const [isMobile, setIsMobile] = useState(false);
    const { width } = useWindowDimensions();
    useEffect(() => {
        setIsMobile(width < 768);
    }, [width]);
    let height: number = isMobile ? 220 : 168;

    return (
        <Card className={isExpanded ? styles.timelineItemContentExpanded : styles.timelineItemContent}>
            <AnimateHeight height={isExpanded ? "auto" : height} animateOpacity={true}>
                <div className={styles.timelineItemLocDate}>
                    <span className={styles.date}>{isMobile ? props.dateSmall : props.date}</span>
                    <span className={styles.location}>
                        <MapPinIcon className={styles.locationIcon} /> {isMobile ? props.locationSmall : props.location}
                    </span>
                </div>
                <div className={styles.timelineItemDetails}>
                    <h3 className={styles.school}>{props.school}</h3>
                    <p className={styles.degree}>
                        <AcademicCapIcon className={styles.degreeIcon} /> {props.degree}
                    </p>
                    {isExpanded && <TimelineAdditionalDetails {...props.details} />}
                    <div className={isExpanded ? styles.viewLess : styles.viewMore}>
                        <TextButton
                            title={isExpanded ? "View less" : "View more"}
                            onClick={() => {
                                setIsExpanded(!isExpanded);
                            }}
                        />
                    </div>
                </div>
            </AnimateHeight>
        </Card>
    );
}
