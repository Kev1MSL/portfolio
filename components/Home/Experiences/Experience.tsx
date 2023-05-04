/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../../styles/Home/ExperienceAndAchievement.module.css";
import CardSecondary from "../../CardSecondary";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import TextButton from "../../Buttons/TextButton";
import ExperienceDetails from "./ExperienceDetails";
import { useWindowDimensions } from "../Education/TimelineItem";

export type ExperienceProps = {
    title: string;
    company: string;
    location: string;
    locationSmall: string;
    date: string;
    dateSmall: string;
    description: string[];
    children?: JSX.Element | JSX.Element[];
};
export default function Experience(props: ExperienceProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { width } = useWindowDimensions();
    useEffect(() => {
        setIsMobile(width < 768);
    }, [width]);

    let height: number = isMobile ? 200 : 168;
    return (
        <CardSecondary className={isExpanded ? styles.experienceItemContentExpanded : styles.experienceItemContent}>
            <AnimateHeight height={isExpanded ? "auto" : height} animateOpacity={true}>
                <div className={styles.experienceHeader}>
                    <span className={styles.date}>{isMobile ? props.dateSmall : props.date}</span>
                    <span className={styles.location}>
                        <MapPinIcon className={styles.locationIcon} /> {isMobile ? props.locationSmall : props.location}
                    </span>
                </div>
                <div className={styles.experienceItemDetails}>
                    <h3 className={styles.experienceItemTitle}>{props.title}</h3>
                    <p className={styles.experienceItemCompany}>
                        <BuildingOffice2Icon className={styles.companyIcon} /> {props.company}
                    </p>
                    {isExpanded && <ExperienceDetails description={props.description} />}
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
        </CardSecondary>
    );
}
