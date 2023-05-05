import styles from "../styles/Footer.module.css";

export default function Footer({
	isBlog = false,
	className = "",
}: {
	isBlog: boolean;
	className?: string;
}) {
	const year: number = new Date().getFullYear();
	return (
		<footer
			className={`${className} w-full mt-auto text-center z-10 ${
				isBlog ? styles.blog : styles.portfolio
			}`}
		>
			<span
				className={`text-sm ${
					isBlog ? styles.copyrightContentBlog : "text-gray-300"
				}`}
			>
				Copyright &copy; {year} Kevin Messali, all rights reserved.
			</span>
		</footer>
	);
}
