/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import { ProjectProps } from "../Home/HighlightProjects/FeaturedProject";
import CardSecondary from "../CardSecondary";
import styles from "../../styles/Projects/Projects.module.css";
import Pill from "../Pill";
import { FolderIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function ProjectItem(prop: ProjectProps) {
	let image;
	if (prop.image) {
		image = (
			<Image
				src={prop.image}
				alt={prop.title}
				className={styles.projectImage}
				width={192}
				height={192}
			/>
		);
	} else {
		image = <FolderIcon className={styles.imageIcon} />;
	}
	return (
		<CardSecondary className={styles.projectContainer}>
			<div className={styles.project}>
				<Pill className={styles.pill}>
					<span>{prop.type}</span>
				</Pill>
				<div className={styles.projectImageContainer}>{image}</div>
				<div className={styles.projectContent}>
					<h4 className={styles.projectTitle}>{prop.title}</h4>
					<p className={styles.projectDescription}>{prop.description}</p>
					<div className={styles.techStackContainer}>
						<ul className={styles.projectTechStack}>
							{prop.techStack.map((tech, index) => {
								return (
									<li key={index} className={styles.projectTechStackItem}>
										{tech}
									</li>
								);
							})}
						</ul>
					</div>
					<div className={styles.projectLinks}>
						{prop.links.github && (
							<a
								href={prop.links.github}
								className={styles.projectLink}
								target="_blank"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className={"h-6 w-6"}
									viewBox="0 0 24 24"
								>
									<path
										fill={"currentColor"}
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							</a>
						)}
						{prop.links.website && (
							<a
								href={prop.links.website}
								className={styles.projectLink}
								target="_blank"
							>
								<GlobeAltIcon className={"h-6 w-6"} />
							</a>
						)}
					</div>
				</div>
			</div>
		</CardSecondary>
	);
}
