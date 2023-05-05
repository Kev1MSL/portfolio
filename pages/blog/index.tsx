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
import FeaturedPost from "@/components/Blog/FeaturedPost";

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
	let featuredPost: Post = posts.find((post: Post) => post.isFeatured === true);
	if (!featuredPost) {
		featuredPost = posts[0];
	}

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
			<Navbar isBlog={true} className={inter.className} />
			<main className={`${styles.content}`}>
				<section className="flex w-5/6 mx-auto justify-around items-center">
					<div>
						<h1 className={styles.title}>Kevin&apos;s Blog</h1>
						<p className={styles.description}>
							Welcome to my blog! I will be sharing here my thoughts and
							experiences on various topics.
						</p>
					</div>
					<div>
						{featuredPost && (
							<FeaturedPost key={featuredPost.id} post={featuredPost} />
						)}
					</div>
				</section>

				<section className={styles.allPostContainer}>
					<h3 className="text-2xl font-semibold text-gray-800">All Posts</h3>
					<div className="border-t-2 border-gray-500">
						{posts.length > 1 ? (
							<div className={styles.blogPost}>
								{posts.map((post: Post) => (
									<BlogCard key={post.id} post={post} />
								))}
							</div>
						) : (
							<div className={styles.noPostContainer}>
								<h2 className={styles.noPostTitle}>No posts yet!</h2>
								<p className={styles.noPostDescription}>
									Please check back later for more posts.
								</p>
							</div>
						)}
					</div>
				</section>
			</main>
			<Footer isBlog={true} className={inter.className} />
		</div>
	);
};

export default Blog;
