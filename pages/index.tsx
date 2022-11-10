/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home/Home.module.css";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import {PaperAirplaneIcon} from "@heroicons/react/24/solid";
import IntroHero from "../components/Home/IntroHero";
import AboutMe from "../components/Home/AboutMe";
import Education from "../components/Home/Education/Education";
import HighlightProjects from "../components/Home/HighlightProjects";

export default function Home() {
	return (
		<>
			<Head>
				<title>Kevin Messali | Student & Aspiring Entrepreneur</title>
			</Head>
			<Navbar/>
			<main className={styles.content}>
				<section className={`${styles.introSection} border-b`} id={"intro-hero"}>
					<IntroHero/>
				</section>
				<section className={styles.section} id={"about-me"}>
					<AboutMe/>
				</section>
				<section className={styles.section} id={"education"}>
					<Education/>
				</section>
				<section className={styles.section} id={"highlight-projects"}>
					<HighlightProjects/>
				</section>
			</main>
		</>

	)
}
