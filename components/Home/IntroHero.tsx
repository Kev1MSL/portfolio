/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../styles/Home/IntroHero.module.css";
import PrimaryButton from "../Buttons/PrimaryButton";
import {PaperAirplaneIcon} from "@heroicons/react/24/solid";
import React from "react";
import {Link} from 'react-scroll'
import {useRouter} from "next/router";

export default function IntroHero() {
	const router = useRouter();
	return (
		<div className={styles.hero}>
			<div className={styles.welcomeMessage}>Welcome! My name is</div>
			<h1 className={styles.title}>Kevin Messali</h1>
			<div className={styles.subtitle}>I am a <span
				className={styles.subtitleKeyword}>Developer</span> & <span
				className={styles.subtitleKeyword}>Entrepreneur</span></div>
			<div className={styles.description}>On this website you will find my current and past projects, some
				interesting information about me and my blog where I share my experiences.
			</div>
			<div className={styles.contactButton}><span className="mr-5">Any questions?</span><PrimaryButton
				onClick={() => {
					// Send email
					router.push("mailto:kevinmessali.pro@gmail.com");
				}} title="Let's get in touch" icon={<PaperAirplaneIcon className="w-5 h-5"/>}/></div>
			<Link className={styles.scrollNext} to={"about-me"} smooth={true} offset={-70}>
				<div className={styles.mousey}>
					<div className={styles.scroller}></div>
				</div>
			</Link>
		</div>
	);
}