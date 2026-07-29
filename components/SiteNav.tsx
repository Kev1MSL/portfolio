import Link from "next/link";

const links = [
	{ label: "Work", href: "/#work" },
	{ label: "GitHub", href: "https://github.com/Kev1MSL", external: true },
	{ label: "X.com", href: "https://x.com/Kev1MSL", external: true },
	{ label: "Email", href: "mailto:messalikevin@gmail.com", external: true },
];

export default function SiteNav() {
	return (
		<header className="mx-auto flex w-full max-w-[880px] flex-col items-start gap-3 px-6 pb-2 pt-8 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-6 sm:gap-y-2 sm:px-10">
			<Link
				href="/"
				className="display text-[15px] font-semibold tracking-[0.02em] text-ink transition-colors hover:text-signalInk"
			>
				kevin messali
			</Link>
			<nav className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
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
