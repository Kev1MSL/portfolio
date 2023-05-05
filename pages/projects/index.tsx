/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import Head from "next/head";
import Navbar from "../../components/Navbar";
import React from "react";

import styles from "../../styles/Projects/Projects.module.css";
import FeaturedProject, {
	ProjectProps,
	ProjectType,
} from "../../components/Home/HighlightProjects/FeaturedProject";
import ProjectItem from "../../components/Projects/ProjectItem";
import LeftContactBar from "../../components/LeftContactBar";

import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin-ext"] });

type ProjectInfo = {
	info: ProjectProps;
	isFeatured: boolean;
};
export default function Project() {
	const projects: ProjectInfo[] = [
		{
			isFeatured: true,
			info: {
				title: "My personal website",
				description:
					"Portfolio & blog website fully built from scratch and powered with Next.js.",
				image: "/logo/logo.png",
				techStack: ["Next.js", "TailwindCSS", ".NET Core", "TypeScript"],
				type: ProjectType.Personal,
				links: {
					github: "https://github.com/Kev1MSL/portfolio",
					website: "https://www.kevinmessali.com",
				},
			},
		},
		{
			isFeatured: true,
			info: {
				title: "Creofin survey",
				description:
					"Survey to collect feedback from farmers built with a scalable architecture and question dependencies. It is my first project using Next.js and TailwindCSS.",
				image: "/assets/featured_projects/creofin_survey.png",
				techStack: ["Next.js", "PostgreSQL", ".NET Core", "NextUI"],
				type: ProjectType.StartUp,
				links: {
					github: "https://github.com/Kev1MSL/creofin_survey",
					website: "https://sondage.creofin.fr",
				},
			},
		},
		{
			isFeatured: true,
			info: {
				title: "XCoin - Cryptocurrency",
				type: ProjectType.School,
				description:
					"Final project for the object-oriented programming in C++ class. Functional cryptocurrency based on Proof of Stake.",
				image: "/assets/featured_projects/xcoin.png",
				techStack: ["C++", "QT", "gRPC", "CMake"],
				links: {
					github: "https://github.com/Kev1MSL/XCoin",
				},
			},
		},
		{
			isFeatured: true,
			info: {
				title: "Creofin - Buy Now, Pay After Harvest",
				type: ProjectType.StartUp,
				description:
					"Payment solutions for farmers to buy agri inputs online at 0% interest rates/fees. We help to make the agricultural industry more digitalized.",
				image: "/assets/featured_projects/creofin.svg",
				techStack: ["Python", ".NET Core", "TypeScript", "REST API"],
				links: { website: "https://www.creofin.com/" },
			},
		},
		{
			isFeatured: false,
			info: {
				title: "BX+ - The app for the bachelor students",
				type: ProjectType.School,
				description:
					"Centralize all the academic tools and social features into a single mobile application for the bachelor students.",
				image: "/assets/projects/bxplus.png",
				techStack: ["Flutter", "Node.JS", "MangoDB", "REST API"],
				links: { website: "http://bxplus.co/" },
			},
		},
		{
			isFeatured: false,
			info: {
				title: "MIZIX - Serenity Car",
				type: ProjectType.StartUp,
				description:
					"Automatic do not disturb mode when you are driving and other activities that requires you to be focused. Handles your calls by sending a customized messages to the callers. It also activates automatically when you start driving or enter a specific zone.",
				image: "/assets/projects/serenity_car.png",
				techStack: ["Java", "Android", "Google Play Services"],
				links: {
					website: "https://mizix.net/serenity-car/",
				},
			},
		},
		{
			isFeatured: false,
			info: {
				title: "MIZIX - NLost",
				type: ProjectType.StartUp,
				description:
					"Smart and secure USB flash drive that you cannot forget on computers. Patented techonology combining a customized USB flashdrive, a smartphone app and a computer software.",
				image: "/assets/projects/nlost.png",
				techStack: ["Java", "C#", "WPF", "MSSQL", "Arduino"],
				links: {
					website: "https://mizix.net/nlost/",
				},
			},
		},
		{
			isFeatured: false,
			info: {
				title: "Processor Enclaves Applications",
				type: ProjectType.Internship,
				description:
					"Developed a secure and efficient application to run on Intel SGX processor enclaves. It was my first glimpse on hardware security, and it is definitely a topic I would like to learn more.",
				image: "/assets/projects/sgx.jpg",
				techStack: ["C", "Intel SGX", "Hardware Security"],
				links: {
					website:
						"https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/overview.html",
				},
			},
		},
		{
			isFeatured: false,
			info: {
				title: "Fragment",
				type: ProjectType.School,
				description:
					"Alternative to Jupyter Notebook that allows you to run Markdown, JavaScript and Python code in cells. Final project for the web development class developed in a team of 2.",
				techStack: ["HTML", "CSS", "JavaScript", "Pyodide"],
				links: {
					github: "https://github.com/Kev1MSL/Fragment",
				},
			},
		},
		{
			isFeatured: false,
			info: {
				title: "Tasty n' Krunchy",
				type: ProjectType.School,
				description:
					"Automatic food distributor for hamsters and other rodents. Implemented a smartphone app that interacts with an API and retrieve information from a database. Final project for the engineering class in high school developed in a team of 4.",
				techStack: ["Java", "Android", "PHP", "Arduino", "MSSQL"],
				links: {
					github: "https://github.com/Kev1MSL/Tasty-and-Krunchy",
				},
			},
		},
	];
	return (
		<>
			<Head>
				<title>Projects | Kevin Messali</title>
			</Head>
			<Navbar isBlog={false} className={inter.className} />
			<main className={`${styles.content} ${inter.className}`}>
				<LeftContactBar />
				<div className={styles.pageContainer}></div>
				<h1 className={styles.title}>All My Projects</h1>
				<div className={styles.projectsContainer}>
					{projects.map((project, index) => {
						if (project.isFeatured) {
							return <FeaturedProject key={index} {...project.info} />;
						} else {
							return <ProjectItem key={index} {...project.info} />;
						}
					})}
				</div>
			</main>
			<Footer isBlog={false} className={inter.className} />
		</>
	);
}
