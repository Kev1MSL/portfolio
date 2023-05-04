import { FunctionComponent } from "react";
import { Post } from "../../@types/schema";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Blog/BlogCard.module.css";

type BlogCardProps = {
	post: Post;
};

dayjs.extend(localizedFormat);

const BlogCard: FunctionComponent<BlogCardProps> = ({ post }) => {
	return (
		<Link href={`/blog/post/${post.slug}`}>
			<div className={styles.container}>
				<div className="flex-shrink-0">
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
						<div className={styles.element}>
							<h4 className={styles.publishedDate}>
								{dayjs(post.publishedDate).format("LL")}
							</h4>
						</div>
						<div className={styles.element}>
							<h4 className={styles.postTitle}>{post.title}</h4>
						</div>
						<div className={styles.element}>
							<h4 className={styles.postDescription}>{post.description}</h4>
						</div>
						<div className={styles.tagContainer}>
							{post.tags.map((tag) => {
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
