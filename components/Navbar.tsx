/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar({
	isBlog = false,
	className = "",
}: {
	isBlog: boolean;
	className?: string;
}) {
	const router = useRouter();

	function isActive(path: string) {
		return router.pathname === path;
	}

	return (
		<nav
			className={`${isBlog ? styles.navbarBlog : styles.navbar} ${className}`}
		>
			<div className={styles.navbarLogo}>
				<Link href={"/"} className={styles.navbarLogoLink}>
					<Image
						src={"/logo/logo.png"}
						alt={"Logo"}
						className={styles.navbarLogoImage}
						width={40}
						height={40}
					/>
				</Link>
			</div>
			<div className={styles.navbarContent}>
				<ul className={styles.navbarList}>
					<li
						className={`${styles.navbarItem} ${
							isBlog ? styles.navbarItemLight : styles.navbarItemDark
						} ${isActive("/") ? styles.selected : ""}`}
					>
						<Link href={"/"} className={styles.navbarItemLink}>
							Home
						</Link>
					</li>
					<li
						className={`${styles.navbarItem} ${
							isBlog ? styles.navbarItemLight : styles.navbarItemDark
						} ${isActive("/projects") ? styles.selected : ""}`}
					>
						<Link href={"/projects"} className={styles.navbarItemLink}>
							Projects
						</Link>
					</li>
					<li
						className={`${styles.navbarItem} ${
							isBlog ? styles.navbarItemLight : styles.navbarItemDark
						} ${isActive("/blog") ? styles.selected : ""}`}
					>
						<Link href={"/blog"} className={styles.navbarItemLink}>
							Blog
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
