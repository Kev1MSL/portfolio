/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import styles from "../../../styles/Home/HighlightProjects.module.css";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import FeaturedProject, { ProjectType } from "./FeaturedProject";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useRouter } from "next/router";

export default function HighlightProjects() {
	const router = useRouter();
	return (
		<div className={styles.contentContainer}>
			<h2 className={styles.title}>My Featured Projects</h2>
			<div className={styles.content}>
				<p className={styles.contentDescription}>
					Curious by nature, I love to explore new technologies and learn new
					skills. This comes from a constant desire to improve myself and
					understand the world around me. I am always looking for new challenges
					to overcome and new problems to solve. I have discovered programming
					during my last year of primary school and since then I have been
					hooked. I have been working on plenty of projects in a lot of
					different fields, ranging from mobile application, to IoT without
					forgetting blockchain and machine learning. Because of my most recent
					projects, I am now focusing on web development and machine learning.
				</p>
				<div className={styles.techStack}>
					<h3 className={styles.technicalInfoTitle}>
						The most recent technologies I have worked with
					</h3>
					<ul className={styles.techStackList}>
						<li className={styles.techStackItem}>
							<ArrowRightCircleIcon className={styles.techStackItemIcon} />{" "}
							Next.js
						</li>
						<li className={styles.techStackItem}>
							<ArrowRightCircleIcon className={styles.techStackItemIcon} />
							.NET Core
						</li>
						<li className={styles.techStackItem}>
							<ArrowRightCircleIcon className={styles.techStackItemIcon} />
							Flutter
						</li>
						<li className={styles.techStackItem}>
							<ArrowRightCircleIcon className={styles.techStackItemIcon} />
							Intel SGX
						</li>
						<li className={styles.techStackItem}>
							<ArrowRightCircleIcon className={styles.techStackItemIcon} />
							TypeScript
						</li>
						<li className={styles.techStackItem}>
							<ArrowRightCircleIcon className={styles.techStackItemIcon} />
							Python
						</li>
						<li className={styles.techStackItem}>
							<ArrowRightCircleIcon className={styles.techStackItemIcon} />
							C/C++/C#
						</li>
						<li className={styles.techStackItem}>
							<ArrowRightCircleIcon className={styles.techStackItemIcon} />
							TailwindCSS
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.technicalInfo}>
				<div className={styles.projects}>
					<div className={styles.projectListContainer}>
						<FeaturedProject
							title={"My personal website"}
							type={ProjectType.Personal}
							description={
								"Portfolio & blog website fully built from scratch and powered with Next.js."
							}
							image={"/logo/logo.png"}
							techStack={["Next.js", "TailwindCSS", ".NET Core", "TypeScript"]}
							links={{
								github: "https://github.com/Kev1MSL/portfolio",
								website: "https://www.kevinmessali.com",
							}}
						/>
						<FeaturedProject
							title={"Creofin survey"}
							type={ProjectType.StartUp}
							description={
								"Survey to collect feedback from farmers built with a scalable architecture and question dependencies. It is my first project using Next.js and TailwindCSS."
							}
							image={"/assets/featured_projects/creofin_survey.png"}
							techStack={["Next.js", "PostgreSQL", ".NET Core", "NextUI"]}
							links={{
								github: "https://github.com/Kev1MSL/creofin_survey",
								website: "https://sondage.creofin.fr",
							}}
						/>
						<FeaturedProject
							title={"XCoin - Cryptocurrency"}
							type={ProjectType.School}
							description={
								"Final project for the object-oriented programming in C++ class. Functional cryptocurrency based on Proof of Stake."
							}
							image={"/assets/featured_projects/xcoin.png"}
							techStack={["C++", "QT", "gRPC", "CMake"]}
							links={{ github: "https://github.com/Kev1MSL/XCoin" }}
						/>
						<FeaturedProject
							title={"Creofin - Buy Now, Pay After Harvest"}
							type={ProjectType.StartUp}
							description={
								"Payment solutions for farmers to buy agri inputs online at 0% interest rates/fees. We help to make the agricultural industry more digitalized."
							}
							image={"/assets/featured_projects/creofin.svg"}
							techStack={["Python", ".NET Core", "TypeScript", "REST API"]}
							links={{ website: "https://www.creofin.com/" }}
						/>
					</div>
				</div>
			</div>
			<div className={styles.seeMoreProjects}>
				<span className="mr-5">Want to see more projects?</span>
				<PrimaryButton
					onClick={() => {
						// Send email
						router.push("/projects");
					}}
					title="View more"
					icon={<ChevronRightIcon className="w-5 h-5" />}
				/>
			</div>
		</div>
	);
}
