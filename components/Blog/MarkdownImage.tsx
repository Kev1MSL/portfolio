import { FunctionComponent, ReactElement, useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";

import styles from "../../styles/Blog/MarkdownImage.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";

export type MarkDownImageProps = {
	src: string;
	altStr: string;
	alt2Render: string;
	width: number;
	height: number;
	className: string | undefined;
};

const MarkDownImage: FunctionComponent<MarkDownImageProps> = ({
	src,
	altStr,
	alt2Render,
	width,
	height,
	className,
}: MarkDownImageProps) => {
	const [isLoading, setLoading] = useState(true);

	return (
		<div className={`${styles.imageContainer} ${className}`}>
			<Image
				src={src ?? ""}
				sizes="100vw"
				width={width}
				height={height}
				className={`image-md ${
					isLoading ? styles.blurredImage : styles.loadedImage
				} ${altStr ? styles.imageWithAlt : ""}`}
				onLoadingComplete={() => {
					setLoading(false);
				}}
				alt={altStr ?? ""}
			/>
			{altStr && (
				<figcaption className={styles.imageCaption}>
					<ReactMarkdown
						components={{
							a({ node, className, children, href, ...props }) {
								return (
									<Link
										href={href ?? ""}
										className={className}
										target={"_blank"}
									>
										{children}
									</Link>
								);
							},
						}}
					>
						{alt2Render}
					</ReactMarkdown>
				</figcaption>
			)}
		</div>
	);
};

export default MarkDownImage;
