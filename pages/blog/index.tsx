/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import Navbar from "../../components/Navbar";
import Head from "next/head";


export default function Blog() {

    return (
            <>
                <Head>
                    <title>Blog | Kevin Messali</title>
                </Head>
                <Navbar/>
                <main>
                    <div className={"text-center mt-10"}>Currently in development.</div>
                </main>

            </>
    );
}
