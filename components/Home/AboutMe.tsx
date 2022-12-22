/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../styles/Home/AboutMe.module.css";

export default function AboutMe() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const age = date.getMonth() >= 6 ? currentYear - 2002 : currentYear - 2003;
    return (
        <div className={styles.contentContainer}>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <p className={styles.description}>
                        Hi there! I am Kevin and I am currently a last-year bachelor student majoring in Mathematics &
                        Computer Science at l&apos;Ecole Polytechnique (the top engineering school in France). I am{" "}
                        {age} with French and Ukrainian origins. I was born in Paris, although I have spent most of my
                        youth in the French Riviera under the sun and the palms of Cannes.
                    </p>
                    <div className={styles.myMissionContainer}>
                        <h3 className={styles.myMission}>
                            My Mission: <span className={styles.missionKeyword}>Impact</span> and{" "}
                            <span className={styles.missionKeyword}>Disrupt</span>
                        </h3>
                        <p className={styles.myMissionDescription}>
                            I read somewhere that we should define ourselves as verbs rather than words. With verbs we
                            allow ourselves to grow beyond who we are, making us both more creative and more
                            open-minded. I believe that our generation is going to play a crucial role for the future of
                            humankind as we have a lot of issues to overcome. For this reason, I am driven by constantly
                            challenging the status quo and impacting positively the world around me.
                        </p>
                    </div>
                </div>
                <div className={styles.pictureContainer}>
                    <img src={"../../kevin.jpg"} alt={"Kevin"} className={styles.picture} />
                </div>
            </div>
        </div>
    );
}
