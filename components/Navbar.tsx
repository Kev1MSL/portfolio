/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import {useRouter} from "next/router";
import PrimaryButton from "./Buttons/PrimaryButton";
import {ChevronRightIcon} from "@heroicons/react/20/solid";

export default function Navbar({ isBlog = false }: { isBlog: boolean }) {
    const router = useRouter();

    function isActive(path: string) {
        return router.pathname === path;
    }

    return (
        <nav className={isBlog ? styles.navbarBlog : styles.navbar}>
            <div className={styles.navbarLogo}>
                <Link href={"/"} className={styles.navbarLogoLink}>
                    <img src={"/logo/logo.png"} alt={"Logo"} className={styles.navbarLogoImage} />
                </Link>
            </div>
            <div className={styles.navbarContent}>
                <ul className={styles.navbarList}>
                    <li
                        className={`${styles.navbarItem} ${isBlog ? styles.navbarItemLight : styles.navbarItemDark} ${
                            isActive("/") ? styles.selected : ""
                        }`}
                    >
                        <Link href={"/"} className={styles.navbarItemLink}>
                            Home
                        </Link>
                    </li>
                    <li
                        className={`${styles.navbarItem} ${isBlog ? styles.navbarItemLight : styles.navbarItemDark} ${
                            isActive("/projects") ? styles.selected : ""
                        }`}
                    >
                        <Link href={"/projects"} className={styles.navbarItemLink}>
                            Projects
                        </Link>
                    </li>
                    <li
                        className={`${styles.navbarItem} ${isBlog ? styles.navbarItemLight : styles.navbarItemDark} ${
                            isActive("/blog") ? styles.selected : ""
                        }`}
                    >
                        <Link href={"/blog"} className={styles.navbarItemLink}>
                            Blog
                        </Link>
                    </li>
                </ul>
                {isActive("/blog") ? (
                    <ul className={styles.navbarRight}>
                        <li className={styles.navbarLoginItem}>
                            <Link href={""} className={styles.navbarLogin}>
                                <PrimaryButton title={"Login"} icon={<ChevronRightIcon className="w-6 h-6" />} />
                            </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link href={""} className={styles.navbarRegister}>
                                Register
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}
