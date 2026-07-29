import Image from "next/image";
import type { PlateSpec } from "@/lib/register";

/**
 * An artifact plate. Every plate is a real document — a scan, a capture, a
 * shipped icon — never an illustration of one.
 */
export default function Plate({
	plate,
	size = "md",
	inMargin = false,
}: {
	plate: PlateSpec;
	size?: "lg" | "md";
	/** Sits in the right margin beside the text rather than in the column. */
	inMargin?: boolean;
}) {
	const isIcon = plate.variant === "icon";
	const isPhoto = plate.variant === "photo";
	const iconBox = size === "lg" ? "h-20 w-20" : "h-14 w-14";

	// No image on this page draws a border. A photograph defines its own edges. A
	// document gets a white mount instead: white against cream is enough to read
	// as a sheet laid on the paper, and unlike a hairline it cannot sit a couple
	// of pixels off a grid line and look mis-registered. Rules stay reserved for
	// structure — section dividers and row separators.
	const frame = isPhoto
		? "w-full"
		: `bg-white ${isIcon ? "p-3" : "w-full p-4 sm:p-6"}`;

	return (
		<figure
			// In the margin the width is fixed so the flex row can size around it;
			// max-width keeps it honest once the row stacks on a narrow screen.
			style={
				inMargin
					? { width: plate.maxWidth ?? 300, maxWidth: "100%" }
					: undefined
			}
			className={
				inMargin ? "shrink-0 sm:mt-2" : size === "lg" ? "mt-6" : "mt-5"
			}
		>
			<div
				className={`inline-flex min-w-0 max-w-full items-center justify-center ${frame}`}
			>
				<Image
					src={plate.src}
					alt={plate.alt}
					width={plate.width}
					height={plate.height}
					className={
						isIcon
							? `${iconBox} rounded-[22%]`
							: isPhoto
								? "h-auto w-full object-cover"
								: "h-auto w-full object-contain mix-blend-multiply"
					}
				/>
			</div>
			{plate.caption && (
				<figcaption className="mt-2 font-mono text-[11px] leading-5 text-lead">
					{plate.caption}
				</figcaption>
			)}
		</figure>
	);
}
