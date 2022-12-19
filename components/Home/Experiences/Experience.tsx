/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../../styles/Home/ExperienceAndAchievement.module.css";
import CardSecondary from "../../CardSecondary";
import {useState} from "react";
import AnimateHeight from "react-animate-height";
import {MapPinIcon} from "@heroicons/react/24/outline";
import {BuildingOffice2Icon} from "@heroicons/react/24/solid";
import TextButton from "../../Buttons/TextButton";
import ExperienceDetails from "./ExperienceDetails";

export type ExperienceProps = {
    title: string;
    company: string;
    location: string;
    date: string;
    description: string[];
    children?: JSX.Element | JSX.Element[];
};
export default function Experience(props: ExperienceProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <CardSecondary className={isExpanded ? styles.experienceItemContentExpanded : styles.experienceItemContent}>
            <AnimateHeight height={isExpanded ? "auto" : 168} animateOpacity={true}>
                <div className={styles.experienceHeader}>
                    <span className={styles.date}>{props.date}</span>
                    <span className={styles.location}>
                        <MapPinIcon className={styles.locationIcon} /> {props.location}
                    </span>
                </div>
                <div className={styles.experienceItemDetails}>
                    <h3 className={styles.experienceItemTitle}>{props.title}</h3>
                    <p className={styles.experienceItemCompany}>
                        <BuildingOffice2Icon className={styles.companyIcon} /> {props.company}
                    </p>
                    {isExpanded && <ExperienceDetails description={props.description} />}
                    <TextButton
                        id={`${props.title}-viewmore`}
                        title={isExpanded ? "View less" : "View more"}
                        className={isExpanded ? styles.viewLess : styles.viewMore}
                        onClick={() => {
                            setIsExpanded(!isExpanded);
                        }}
                    />
                </div>
            </AnimateHeight>
        </CardSecondary>
    );
}
