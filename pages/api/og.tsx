import { ImageResponse } from "next/og";

export const config = { runtime: "edge" };

const PAPER = "#FBFAF7";
const INK = "#1A1A18";
const LEAD = "#6B6B62";
const RULE = "#DDDCD3";
const SIGNAL = "#E8502A";

const MODULE = 40;
const W = 1200;
const H = 630;

/** The bold 5mm rules of the sheet, drawn rather than tiled. */
function grid() {
	const lines: JSX.Element[] = [];
	for (let x = MODULE; x < W; x += MODULE) {
		lines.push(
			<div
				key={`v${x}`}
				style={{
					position: "absolute",
					left: x,
					top: 0,
					width: 1,
					height: H,
					backgroundColor: SIGNAL,
					opacity: 0.07,
				}}
			/>
		);
	}
	for (let y = MODULE; y < H; y += MODULE) {
		lines.push(
			<div
				key={`h${y}`}
				style={{
					position: "absolute",
					left: 0,
					top: y,
					width: W,
					height: 1,
					backgroundColor: SIGNAL,
					opacity: 0.07,
				}}
			/>
		);
	}
	return lines;
}

export default async function handler() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					backgroundColor: PAPER,
					padding: 64,
					position: "relative",
				}}
			>
				{grid()}

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "baseline",
						borderBottom: `1px solid ${INK}`,
						paddingBottom: 16,
						color: INK,
						fontSize: 22,
						letterSpacing: 3,
					}}
				>
					<div style={{ fontWeight: 600 }}>KEVIN MESSALI</div>
					<div style={{ color: LEAD, fontSize: 18 }}>PARIS, FR</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							fontSize: 76,
							lineHeight: 1.05,
							fontWeight: 700,
							color: INK,
							letterSpacing: -1.5,
							maxWidth: 900,
						}}
					>
						Hi, I&apos;m Kevin.
					</div>
					<div
						style={{
							marginTop: 28,
							fontSize: 24,
							color: LEAD,
							maxWidth: 880,
							lineHeight: 1.45,
						}}
					>
						I&apos;m an engineer in Paris. I build Ted, an AI friend people talk
						to every day, at Ooma.
					</div>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "baseline",
						borderTop: `1px solid ${RULE}`,
						paddingTop: 16,
						fontSize: 18,
					}}
				>
					<div style={{ color: SIGNAL, letterSpacing: 1 }}>
						FR3083345 · FR3098668
					</div>
					<div style={{ color: LEAD, letterSpacing: 1 }}>
						SHEET 1 / 1 · ooma.live
					</div>
				</div>
			</div>
		),
		{ width: W, height: H }
	);
}
