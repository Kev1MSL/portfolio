/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../../styles/Home/Education.module.css";
import TimelineItem from "./TimelineItem";
import {TimelineAdditionalDetailsProps} from "./TimelineAdditionalDetails";

export default function Education() {
    const highSchoolDetails: TimelineAdditionalDetailsProps = {
        grade: "18.6/20",
        activities:
            "Creation of our high-school's mini-company, European section, Aeronautical initiation certification",
        achievements:
            "Won the 1st place in the 2018 edition of the regional competition and 2nd place of the national competition of high-school mini-companies",
    };
    const universityDetails: TimelineAdditionalDetailsProps = {
        courses:
            "Followed intense coursework in mathematics (analysis & algebra), computer science (data structures & algorithms, computer architecture, machine learning, networks, object-oriented programming, etc.)",
        activities:
            "IEEE student branch vice-president, editor at the bachelor's newspaper, bachelor representative at the Binet Réseau (IT society), organizer of the mental health awareness week",
        achievements:
            "Co-created the bachelor's blog (horizon.bxplus.co), co-developed the bachelor's app to track homeworks, school events, schedule, etc.",
    };
    const exchangeDetails: TimelineAdditionalDetailsProps = {
        courses: "Probability, data mining, computer vision, strategic management and investment",
    };
    return (
        <div className={styles.contentContainer}>
            <h2 className={styles.title}>My Education</h2>
            <div className={styles.content}>
                <p className={styles.contentIntro}>
                    I am currently majoring in both mathematics and computer science and following intense courses in
                    both of this areas. I believe that this combination of fields is the best way to prepare myself for
                    the future, by empowering me with a strong problem solving and analytical mindset. It is actually
                    only in my last year of bachelor that I understood the real meaning of learning mathematics. I
                    thought that doing this much theory was useless and that there was almost no application in the real
                    world. But I finally understood that we learn mathematics to learn how to think differently and
                    out-of-the-box, which is what is needed to tackle the most challenging problems of our time.
                </p>
                <ul className={styles.timeline}>
                    <li className={styles.timelineItem}>
                        <TimelineItem
                            date={"2020 - 2023"}
                            dateSmall={"'20 - '23"}
                            location={"Palaiseau, France"}
                            locationSmall={"Palaiseau, FR"}
                            school={"Ecole Polytechnique (l'X)"}
                            degree={"Bachelor of Science — Majors Maths & Computer Science"}
                            details={universityDetails}
                        />
                    </li>
                    <li className={styles.timelineItem}>
                        <TimelineItem
                            date={"Fall 2022"}
                            dateSmall={"Fall 2022"}
                            location={"Seoul, Korea"}
                            locationSmall={"Seoul, KOR"}
                            school={"Seoul National University"}
                            degree={"Exchange student"}
                            details={exchangeDetails}
                        />
                    </li>
                    <li className={styles.timelineItem}>
                        <TimelineItem
                            date={"2017 - 2020"}
                            dateSmall={"'17 - '20"}
                            location={"Cannes, France"}
                            locationSmall={"Cannes, FR"}
                            school={"Lycée Jules Ferry"}
                            degree={"Baccalauréat Scientifique — Option Engineering Science"}
                            details={highSchoolDetails}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}
