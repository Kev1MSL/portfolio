import React from "react";
import styles from "../../styles/Blog/CodeCopyBtn.module.css";

import { Tooltip } from "react-tooltip";
import {
	ClipboardDocumentIcon,
	ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

export default function CodeCopyBtn({
	children,
	id,
}: {
	children: any;
	id: any;
}) {
	const [copyOk, setCopyOk] = React.useState(false);

	const handleClick = (e: any) => {
		navigator.clipboard.writeText(children[0].props.children[0]);

		setCopyOk(true);
		setTimeout(() => {
			setCopyOk(false);
		}, 1000);
	};

	const icon = copyOk ? (
		<ClipboardDocumentCheckIcon
			onClick={handleClick}
			color={"#bfe29c"}
			width={20}
		/>
	) : (
		<ClipboardDocumentIcon onClick={handleClick} color={"#ddd"} width={20} />
	);

	return (
		<>
			<div
				className={styles.codeCopyBtn}
				data-tooltip-id={id}
				data-tooltip-content={copyOk ? "Copied!" : "Copy"}
				data-tooltip-place="left"
			>
				{icon}
			</div>
			<Tooltip
				id={id}
				className={`${styles.tooltip} ${copyOk ? styles.tooltipColorOk : ""}`}
			/>
		</>
	);
}
