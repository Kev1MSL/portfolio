/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import Navbar from "../../components/Navbar";
import Head from "next/head";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import {useState} from "react";

import styles from "../../styles/Blog/Blog.module.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function Blog() {
    const [value, setValue] = useState<any>("**Hello world!!!**");
    return (
        <div className={styles.container}>
            <style jsx global>{`
                body {
                    background-color: #f5f5f5;
                    color: #0d1117;
                }
            `}</style>
            <Head>
                <title>Blog | Kevin Messali</title>
            </Head>
            <Navbar isBlog={true} />
            <main className={styles.content}>
                <div className={"text-center mt-10"}>Currently in development.</div>
            </main>
        </div>
    );
}
