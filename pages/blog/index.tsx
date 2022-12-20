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

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function Blog() {
    const [value, setValue] = useState<any>("**Hello world!!!**");
    return (
        <>
            <Head>
                <title>Blog | Kevin Messali</title>
            </Head>
            <Navbar />
            <main>
                <div className={"text-center mt-10"}>Currently in development.</div>
            </main>
        </>
    );
}
