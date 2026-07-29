import { byEra } from "@/lib/register";
import RegisterRow from "./RegisterRow";

/**
 * Three eras, told in order. No year rail: a scroll-tracked column of dates is
 * a timeline widget, and a timeline is the shape of a résumé. The dates still
 * sit on every entry — they just stopped being the spine of the page.
 */
export default function Register() {
	const groups = byEra();

	return (
		<div id="work" className="flex flex-col gap-16">
			{groups.map(({ id, label, entries }) => (
				<section key={id} aria-label={label}>
					<h3 className="display border-t border-ink pt-4 text-[15px] font-semibold text-ink">
						{label}
					</h3>
					<div className="mt-2">
						{entries.map((entry) => (
							<RegisterRow key={entry.id} entry={entry} />
						))}
					</div>
				</section>
			))}
		</div>
	);
}
