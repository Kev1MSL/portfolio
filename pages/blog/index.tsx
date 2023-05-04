/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import Navbar from "../../components/Navbar";
import Head from "next/head";

import styles from "../../styles/Blog/Blog.module.css";

import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import NotionService from "@/services/notion-service";
import BlogCard from "@/components/Blog/BlogCard";
import { Post } from "@/@types/schema";

const inter = Inter({ subsets: ["latin-ext"] });

export const getStaticProps: GetStaticProps = async (context) => {
	const notionService = new NotionService();
	const posts = await notionService.getPublishedPosts();
	return {
		props: {
			posts,
		},
	};
};

const Blog: NextPage = ({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className={inter.className}>
			<style jsx global>
				{`
					body {
						background-color: #f5f5f5;
					}
				`}
			</style>
			<Head>
				<title>Blog | Kevin Messali</title>
			</Head>
			<Navbar isBlog={true} />
			<main className={`${styles.content}`}>
				<div className={styles.blogPost}>
					{posts.map((post: Post) => (
						<BlogCard key={post.id} post={post} />
					))}
				</div>
			</main>
			<Footer isBlog={true} />
		</div>
	);
};

export default Blog;
