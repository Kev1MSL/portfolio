/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home/Home.module.css";
import IntroHero from "../components/Home/IntroHero";
import AboutMe from "../components/Home/AboutMe";
import Education from "../components/Home/Education/Education";
import HighlightProjects from "../components/Home/HighlightProjects/HighlightProjects";
import ExperiencesAndAchievements from "../components/Home/Experiences/ExperiencesAndAchievements";
import LeftContactBar from "../components/LeftContactBar";

import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin-ext"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Kevin Messali | Student & Aspiring Entrepreneur</title>
			</Head>
			<Navbar isBlog={false} className={inter.className} />
			<main className={`${styles.content} ${inter.className}`}>
				<LeftContactBar />
				<section
					className={`${styles.introSection} border-b`}
					id={"intro-hero"}
				>
					<IntroHero />
				</section>
				<section className={styles.section} id={"about-me"}>
					<AboutMe />
				</section>
				<section className={styles.section} id={"education"}>
					<Education />
				</section>
				<section className={styles.section} id={"highlight-projects"}>
					<HighlightProjects />
				</section>
				<section className={styles.section} id={"experiences-achievements"}>
					<ExperiencesAndAchievements />
				</section>
			</main>
			<Footer isBlog={false} className={inter.className} />
		</>
	);
}
