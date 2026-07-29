import type { RegisterEntry } from "@/lib/register";
import Plate from "./Plate";

function LiveBadge() {
	return (
		<span className="ml-3 whitespace-nowrap align-middle font-mono text-[10px] font-normal uppercase tracking-[0.12em] text-signalInk">
			<span
				aria-hidden
				className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-signal align-middle"
			/>
			live
		</span>
	);
}

function Meta({ entry }: { entry: RegisterEntry }) {
	if (!entry.stack && !entry.links) return null;
	return (
		<div className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-2">
			{entry.stack && (
				<span className="font-mono text-[11px] tracking-[0.04em] text-lead">
					{entry.stack.join(" · ")}
				</span>
			)}
			{entry.links?.map((link) => (
				<a
					key={link.href}
					href={link.href}
					target="_blank"
					rel="noreferrer"
					className="text-[13px] text-signalInk underline decoration-signal/30 underline-offset-4 transition-colors hover:decoration-signal"
				>
					{link.label} ↗
				</a>
			))}
		</div>
	);
}

export default function RegisterRow({ entry }: { entry: RegisterEntry }) {
	const big = entry.big === true;
	// A document is meant to be read, so it keeps the full column. A photo is
	// meant to be glanced at, so it goes in the margin and the row's height
	// becomes the taller of the two columns instead of the sum of both.
	const inMargin = entry.plate?.variant === "photo";

	return (
		<article
			className={`border-t border-rule first:border-t-0 ${
				big ? "py-8" : "py-6"
			}`}
		>
			<div className="flex items-baseline justify-between gap-6">
				<h4
					className={`display font-semibold text-ink ${
						big ? "text-[21px] sm:text-[25px]" : "text-[17px] sm:text-[19px]"
					}`}
				>
					{entry.title}
					{entry.org && (
						<span className="font-sans text-[14px] font-normal tracking-normal text-lead">
							{" · "}
							{entry.orgHref ? (
								<a
									href={entry.orgHref}
									target="_blank"
									rel="noreferrer"
									className="underline decoration-rule underline-offset-4 transition-colors hover:text-signalInk hover:decoration-signal"
								>
									{entry.org}
								</a>
							) : (
								entry.org
							)}
						</span>
					)}
					{entry.live && <LiveBadge />}
				</h4>
				<span className="shrink-0 whitespace-nowrap font-mono text-[11px] text-lead">
					{entry.year}
				</span>
			</div>

			<div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
				<div className="min-w-0 flex-1">
					<p
						className={`mt-2 max-w-[62ch] leading-relaxed ${
							big ? "text-[16px] text-ink" : "text-[15px] text-lead"
						}`}
					>
						{entry.headline}
					</p>

					{entry.plate && !inMargin && (
						<Plate plate={entry.plate} size={big ? "lg" : "md"} />
					)}

					{entry.body && (
						<p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-lead">
							{entry.body}
						</p>
					)}

					<Meta entry={entry} />
				</div>

				{entry.plate && inMargin && (
					<Plate plate={entry.plate} size={big ? "lg" : "md"} inMargin />
				)}
			</div>
		</article>
	);
}
