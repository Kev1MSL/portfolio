import { FunctionComponent } from "react";
import { Post, Tag } from "../../@types/schema";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Blog/BlogCard.module.css";
import { CalendarIcon, StarIcon } from "@heroicons/react/24/solid";

type BlogCardProps = {
	post: Post;
};

dayjs.extend(localizedFormat);

const BlogCard: FunctionComponent<BlogCardProps> = ({ post }) => {
	const tags: Tag[] = post.isFeatured
		? [
				{
					id: "featured",
					name: "Featured",
				},
				...post.tags,
		  ]
		: [...post.tags];

	return (
		<Link href={`/blog/post/${post.slug}`}>
			<div className={styles.container}>
				<div className="flex-shrink-0 overflow-hidden">
					<Image
						src={post.coverImage}
						width={500}
						height={300}
						alt="cover"
						className={styles.coverImage}
					/>
				</div>
				<div className={styles.postContent}>
					<div className="flex-1">
						<div className={styles.postHeader}>
							<div className={styles.element}>
								<h2 className={styles.postTitle}>{post.title}</h2>
							</div>
							<div
								className={`${styles.element} ${styles.publishedDateContainer}`}
							>
								<CalendarIcon className={styles.calendarIcon} />
								<span className={styles.publishedDate}>
									{dayjs(post.publishedDate).format("LL")}
								</span>
							</div>
						</div>
						<div className={styles.element}>
							<h4 className={styles.postDescription}>{post.description}</h4>
						</div>
						<div className={styles.tagContainer}>
							{tags.map((tag) => {
								if (tag.id === "featured" && tag.name === "Featured") {
									return (
										<span key={tag.id} className={styles.featuredTag}>
											<StarIcon width={20} height={20} />
											{tag.name}
										</span>
									);
								}
								return (
									<span key={tag.id} className={styles.tag}>
										#{tag.name}
									</span>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
