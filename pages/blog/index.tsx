/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import Navbar from "../../components/Navbar";
import Head from "next/head";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

import styles from "../../styles/Blog/Blog.module.css";
import IntroBlog from "../../components/Blog/IntroBlog";
import FeaturedPost, {PostProps} from "../../components/Blog/FeaturedPost";
import Post from "../../components/Blog/Post";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function Blog() {
    const featuredPost: PostProps = {
        title: "My First Blog Post",
        description: "This is my first blog post. I am excited to share my thoughts and experiences with you!",
        image: "assets/blog/first-post.jpg",
        date: "January 1, 2023",
        tags: ["blog", "first post"],
        isFeatured: true,
    };
    const posts: PostProps[] = [featuredPost, featuredPost, featuredPost, featuredPost];
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
                <section className={styles.intro}>
                    <IntroBlog />
                    <FeaturedPost {...featuredPost} />
                </section>
                <section className={styles.allPosts}>
                    <h5>All blog posts</h5>
                    <div className={styles.allPostsContainer}>
                        {posts.map((post, index) => (
                            <Post {...post} key={index} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
