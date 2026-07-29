import Link from "next/link";

const links = [
	{ label: "Work", href: "/#work" },
	{ label: "GitHub", href: "https://github.com/Kev1MSL", external: true },
	{ label: "X.com", href: "https://x.com/Kev1MSL", external: true },
	{ label: "Email", href: "mailto:messalikevin@gmail.com", external: true },
];

export default function SiteNav() {
	// One row that wraps, rather than a breakpoint that guesses. The wordmark plus
	// "Work GitHub X.com Email" needs about 345px, so it sits on one line on most
	// phones and only drops below the wordmark on genuinely narrow ones.
	//
	// `min-w-0` on the nav is what makes that work: a flex item defaults to
	// min-width:auto, so the link row reports its full width as its minimum,
	// refuses to shrink, and overflows the viewport instead of wrapping.
	return (
		<header className="mx-auto flex w-full max-w-[880px] flex-row flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-6 pb-2 pt-8 sm:px-10">
			<Link
				href="/"
				className="display text-[15px] font-semibold tracking-[0.02em] text-ink transition-colors hover:text-signalInk"
			>
				kevin messali
			</Link>
			<nav className="flex min-w-0 flex-wrap items-baseline gap-x-5 gap-y-1">
				{links.map((link) =>
					link.external ? (
						<a
							key={link.label}
							href={link.href}
							target={link.href.startsWith("mailto") ? undefined : "_blank"}
							rel="noreferrer"
							className="font-mono text-[12px] text-lead transition-colors hover:text-signalInk"
						>
							{link.label}
						</a>
					) : (
						<Link
							key={link.label}
							href={link.href}
							className="font-mono text-[12px] text-lead transition-colors hover:text-signalInk"
						>
							{link.label}
						</Link>
					)
				)}
			</nav>
		</header>
	);
}
