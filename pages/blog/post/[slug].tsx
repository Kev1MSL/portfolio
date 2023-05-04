import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Post, PostPage } from "../../../@types/schema";
import NotionService from "../../../services/notion-service";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as code_theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "../../../styles/Blog/Post.module.css";
import Image from "next/image";
import mediumZoom from "medium-zoom";
import { ReactElement, useEffect } from "react";
import { MarkDownImageProps } from "../../../components/Blog/MarkdownImage";
import MarkDownImage from "../../../components/Blog/MarkdownImage";
import CodeCopyBtn from "../../../components/Blog/CodeCopyBtn";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import remarkMdx from "remark-mdx";
import remarkUnwrapImages from "remark-unwrap-images";
import Link from "next/link";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import readingTime from "reading-time";
import { Inter, Source_Serif_Pro } from "next/font/google";
import "react-tooltip/dist/react-tooltip.css";

import { CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/outline";

dayjs.extend(localizedFormat);

const inter = Inter({ subsets: ["latin-ext"] });
const source_serif = Source_Serif_Pro({
	subsets: ["latin"],
	weight: ["400", "600"],
});

export async function getStaticPaths() {
	const notionService = new NotionService();
	const posts: Post[] = await notionService.getPublishedPosts();

	const paths: string[] = posts.map((post: Post) => {
		return `/blog/post/${post.slug}`;
	});

	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const notionService = new NotionService();
	// @ts-ignore
	const post: PostPage = await notionService.getPost(context.params?.slug);

	if (!post) {
		throw new Error("Post not found");
	}

	return {
		props: {
			postInfo: post.postInfo,
			content: post.content,
		},
	};
};

const Post = ({
	postInfo,
	content,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	useEffect(() => {
		const zoom = mediumZoom(".image-md");

		return () => {
			zoom.detach();
		};
	}, []);
	const Pre = ({ children, id }: { children: any; id: any }) => (
		<pre className={styles.preContainer}>
			<CodeCopyBtn id={id}>{children}</CodeCopyBtn>
			{children}
		</pre>
	);
	const { text: readingTimeText } = readingTime(content);
	return (
		<>
			<style jsx global>
				{`
					body {
						background-color: #f5f5f5;
					}
				`}
			</style>
			<Head>
				<title>{postInfo.title}</title>
				<meta
					name={"description"}
					title={"description"}
					content={postInfo.description}
				/>
				<meta
					name={"og:description"}
					title={"og:description"}
					content={postInfo.description}
				/>
				<meta
					name={"og:image"}
					title={"og:title"}
					content={postInfo.coverImage}
				/>
			</Head>
			<main className={`min-h-screen ${inter.className} ${styles.page}`}>
				<div className={styles.pageHeader}>
					<div className={styles.breadcrumb}>
						<Link href={"/blog/"} className={styles.breadcrumbHome}>
							{" "}
							<HomeIcon width={20} height={20} className="mr-1" />
							Home
						</Link>{" "}
						<span className="select-none text-purple-400 font-medium">
							/
						</span>{" "}
						<span className="text-gray-100 font-medium">{postInfo.title}</span>
					</div>
					<div className={styles.coverContainer}>
						<Image
							src={postInfo.coverImage}
							fill={true}
							alt="post-cover"
							className={styles.cover}
						/>
					</div>
					<div className={styles.pageIconContainer}>
						{postInfo.icon && postInfo.icon.includes("https://") ? (
							<Image
								className={styles.pageIcon}
								src={postInfo.icon}
								height={91}
								width={91}
								alt="page-icon"
							/>
						) : postInfo.icon ? (
							<span className={styles.pageIconEmoji}>{postInfo.icon}</span>
						) : (
							<></>
						)}
					</div>
				</div>
				<div className={styles.postContainer}>
					<h1 className={styles.postTitle}>{postInfo.title}</h1>
					<p className={styles.postDescription}>{postInfo.description}</p>
					<div className={styles.tagContainer}>
						{postInfo.tags.map((tag) => (
							<span key={tag.id} className={styles.tag}>
								#{tag.name}
							</span>
						))}
					</div>
					<div className={styles.publishedDateReadingTime}>
						<div className={styles.publishedDateReadingTimeItems}>
							<CalendarIcon width={20} height={20} />
							<span>{dayjs(postInfo.publishedDate).format("LL")}</span>
						</div>
						<div className={styles.publishedDateReadingTimeItems}>
							<ClockIcon width={20} height={20} />
							<span>{readingTimeText}</span>
						</div>
					</div>
					<div className={styles.author}>{postInfo.author}</div>
					<div className="flex items-center justify-center border-t">
						<article className={styles.postContent}>
							<ReactMarkdown
								remarkPlugins={[
									remarkGfm,
									remarkMath,
									// @ts-ignore
									remarkMdx,
									remarkUnwrapImages,
								]}
								rehypePlugins={[[rehypeKatex, { output: "mathml" }]]}
								className={source_serif.className}
								components={{
									pre({ node, children, ...props }) {
										let id: string = "";
										if (node.position) {
											const { line: startLine } = node.position.start;
											const { line: endLine } = node.position.end;

											id = `${startLine}-${endLine}`;
										} else {
											id = Math.random().toString(36).substring(7);
										}

										return <Pre id={id}>{children}</Pre>;
									},
									code({ node, inline, className, children, ...props }) {
										const match = /language-(\w+)/.exec(className || "");
										return !inline && match ? (
											<SyntaxHighlighter
												{...props}
												style={code_theme}
												language={match[1]}
												wrapLongLines={true}
												PreTag="div"
											>
												{String(children).replace(/\n$/, "")}
											</SyntaxHighlighter>
										) : (
											<code
												{...props}
												className={`${className} ${styles.inlinedCode}`}
											>
												{children}
											</code>
										);
									},
									table({ node, children, className, ...props }) {
										return (
											<table className={`${className} ${inter.className}`}>
												{children}
											</table>
										);
									},
									ul({ node, className, children, ordered, ...props }) {
										// Check if the ul is a task list
										if (className === "contains-task-list") {
											return (
												<ul
													{...props}
													className={`${className} ${styles.taskListContainer}`}
												>
													{children}
												</ul>
											);
										} else {
											return (
												<ul {...props} className={className}>
													{children}
												</ul>
											);
										}
									},
									img({ node, className, ...props }) {
										let width = Number(props?.width);
										let height = Number(props?.height);
										width = isNaN(width) ? 750 : width;
										height = isNaN(height) ? 600 : height;

										let altText2Render: string = "";

										// Render the alt text from the image content if it contains links
										if (props.alt && node.position) {
											const { line: startLine } = node.position.start;
											const { line: endLine } = node.position.end;
											const mdContentLines: string[] = content.split("\n");
											const imageLines: string[] = mdContentLines.slice(
												startLine - 1,
												endLine
											);

											const imageContent = imageLines.join("\n");
											altText2Render = imageContent.substring(
												2,
												imageContent.lastIndexOf(")](") + 1
											);

											// If the altext is not a link, then just use the props.alt
											if (!altText2Render.includes("https://"))
												altText2Render = props.alt;
										}

										const mdImageProps: MarkDownImageProps = {
											src: props.src ?? "",
											alt2Render: altText2Render,
											altStr: props.alt ?? "",
											width: width,
											height: height,
											className: `${className} ${inter.className}`,
										};

										return <MarkDownImage {...mdImageProps} />;
									},
									p({ node, className, children, ...props }) {
										const firstChild: any = children[0];
										if (
											children.length == 1 &&
											firstChild.type &&
											firstChild.props &&
											firstChild.type == "div" &&
											node.position
										) {
											// Get the div block from the markdown content
											const { line: startLine } = node.position.start;
											const { line: endLine } = node.position.end;
											const mdContentLines: string[] = content.split("\n");
											const divLines: string[] = mdContentLines.slice(
												startLine - 1,
												endLine
											);
											const divContent = divLines.join("\n");
											if (divContent.includes("isCallout={true}")) {
												const iconStartIndex = divContent.indexOf("icon={");
												const icon = divContent.substring(
													iconStartIndex + 7,
													divContent.indexOf('"}', iconStartIndex + 7)
												);
												const colorStartIndex = divContent.indexOf("color={");
												const color = divContent.substring(
													colorStartIndex + 8,
													divContent.indexOf('"}', colorStartIndex + 8)
												);

												const className = `${styles.callout} ${styles[color]} ${inter.className}`;

												// url icon
												if (icon.includes("https://")) {
													return (
														<div className={className}>
															<Image
																src={icon}
																alt=""
																width={25}
																height={25}
																className={styles.preIcon}
															/>
															<span>{firstChild.props.children}</span>
														</div>
													);
												}

												// emoji icon
												return (
													<div className={className}>
														<span className={styles.preIcon}>{icon}</span>
														<span>{firstChild.props.children}</span>
													</div>
												);
											}
										}
										return (
											<p className={className} {...props}>
												{children}
											</p>
										);
									},
									a({ node, className, children, href, ...props }) {
										return (
											<Link
												href={href ?? ""}
												className={styles.link}
												target={"_blank"}
											>
												{children}
											</Link>
										);
									},
									h1({ node, className, children, ...props }) {
										return (
											<h2
												className={`${inter.className} ${styles.heading1}${
													className ? " " + className : ""
												}`}
												{...props}
											>
												{children}
											</h2>
										);
									},
									h2({ node, className, children, ...props }) {
										return (
											<h3
												className={`${inter.className} ${styles.heading2}${
													className ? " " + className : ""
												}`}
												{...props}
											>
												{children}
											</h3>
										);
									},
									h3({ node, className, children, ...props }) {
										return (
											<h4
												className={`${inter.className} ${styles.heading3}${
													className ? " " + className : ""
												}`}
												{...props}
											>
												{children}
											</h4>
										);
									},
								}}
							>
								{content}
							</ReactMarkdown>
						</article>
					</div>
				</div>
			</main>
		</>
	);
};

export default Post;
