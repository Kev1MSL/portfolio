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

export default function Home() {
	return (
		<>
			<Head>
				<title>Kevin Messali | Student & Aspiring Entrepreneur</title>
			</Head>
			<Navbar/>
			<main className={styles.content}>
				<section className={`${styles.section} border-b`} id={"intro-hero"}>
					<IntroHero welcomeMessage={"Welcome! My name is"} name={"Kevin Messali"} keyword1={"Student"}
					           keyword2={"Aspiring Entrepreneur"}
					           description={"On this website you will find my current and past projects, some interesting information about me and my blog where I share my experiences."}/>
				</section>
				<section className={styles.section} id={"about-me"}>
					<AboutMe/>
				</section>
			</main>
		</>

	)
}
