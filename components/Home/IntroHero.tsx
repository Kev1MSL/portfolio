/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../styles/Home/IntroHero.module.css";
import PrimaryButton from "../Buttons/PrimaryButton";
import {PaperAirplaneIcon} from "@heroicons/react/24/solid";
import React from "react";
import { Link } from 'react-scroll'
import {useRouter} from "next/router";

export default function IntroHero(props: any){
	const router = useRouter();
	return (
		<div className={styles.hero}>
			<div className={styles.heroWelcomeMessage}>{props.welcomeMessage}</div>
			<h1 className={styles.heroTitle}>{props.name}</h1>
			<div className={styles.heroSubtitle}>I am a <span
				className={styles.heroSubtitleKeyword}>{props.keyword1}</span> & <span
				className={styles.heroSubtitleKeyword}>{props.keyword2}</span></div>
			<div className={styles.heroDescription}>{props.description}</div>
			<div className={styles.heroButton}><span className="mr-5">Any questions?</span><PrimaryButton onClick={() => {
				// Send email
				router.push("mailto:kevinmessali06@gmail.com");
			}} title="Let's get in touch" icon={<PaperAirplaneIcon className="w-5 h-5"/>}/></div>
			<Link className={styles.scrollNext} to={"about-me"} smooth={true} offset={-70}>
				<div className={styles.mousey}>
					<div className={styles.scroller}></div>
				</div>
			</Link>
		</div>
	);
}