/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../../styles/Home/ExperienceAndAchievement.module.css";
import Experience, {ExperienceProps} from "./Experience";

export default function ExperiencesAndAchievements() {
    const experiences: ExperienceProps[] = [
        {
            title: "Co-Founder & CTO",
            company: "Creofin",
            location: "Ghent, Belgium",
            locationSmall: "Ghent, BE",
            date: "February 2022 - Present",
            dateSmall: "Feb 2022 - Present",
            description: [
                "Co-founded Creofin, a fintech startup that aims to digitalize the financial services in the farming industry - Buy Now, Pay After Harvest payment solution",
            ],
        },
        {
            title: "Cybersecurity Engineer Intern",
            company: "Naval Group",
            location: "Ollioules, France",
            locationSmall: "Ollioules, FR",
            date: "June 2022 - August 2022",
            dateSmall: "Jun 2022 - Aug 2022",
            description: [
                "Discovered processor enclaves, a hardware security layer to run programs securely on platforms that might be corrupted.",
                "Delivered presentations to exhibit the need of such technology but also the limitations (attacks and countermeasures).",
                "Engineered different applications in C++ to showcase the use of processor enclaves.",
            ],
        },
        {
            title: "Won fintech vertical - 2022 Cohort",
            company: "Initiator VC (ex. Olam Ventures)",
            location: "Online",
            locationSmall: "Online",
            date: "January 2022 - April 2022",
            dateSmall: "Jan 2022 - Apr 2022",
            description: [
                "Selected among 500+ students from top universities to participate to the challenge and was awarded $10k to launch a project.",
                "Won the Fintech vertical at the Olam Ventures competition - Prize $25k.",
            ],
        },
        {
            title: "National Vice Champion Microcompany",
            company: "Entreprendre Pour Apprendre",
            location: "Cannes, France",
            locationSmall: "Cannes, FR",
            date: "November 2017- June 2018",
            dateSmall: "Nov 2017 - Jun 2018",
            description: [
                "Supervised a team of 6 people to build the pitch of the product as Sales Manager.",
                "Assisted the development of the computer software and the mobile application.",
                "Engineered the modification of the USB flash drive PCB.",
                "Won with the team the regional championship.",
                "Earned the vice-champion title at the national championship.",
            ],
        },
    ];

    return (
        <div className={styles.contentContainer}>
            <h2 className={styles.title}>Experiences & Achievements</h2>
            <div className={styles.content}>
                <p className={styles.contentIntro}>
                    Since I was a child, I have always been interested in engineering and building things.
                    Entrepreneurship seemed like a natural fit for me, and through several experiences, I have
                    discovered that I am passionate about it. Also curious about networks and hardware security, I am
                    now looking to develop my skills in this field through my studies and professional experiences.
                </p>
                <div className={styles.experienceContainer}>
                    {experiences.map((experience, index) => {
                        return <Experience key={index} {...experience} />;
                    })}
                </div>
                <span className={styles.moreInformationText}>
                    More information on my{" "}
                    <a
                        className={styles.linkToLinkedIn}
                        href={"https://www.linkedin.com/in/kevin-messali/details/experience/"}
                        target={"_blank"}
                    >
                        LinkedIn profile.
                    </a>
                </span>
            </div>
        </div>
    );
}
