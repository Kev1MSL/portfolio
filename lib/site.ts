/**
 * Everything that describes this site to something other than a human reader:
 * search results, link previews, the OG card.
 *
 * It lives in one file because it went stale exactly once and that was enough.
 * The meta description and both social descriptions were still selling "I've
 * shipped something every year since I was 16" long after that headline had been
 * cut from the page, so every link shared anywhere advertised a site that no
 * longer existed. Nothing a crawler reads should be typed twice.
 */

export const SITE_URL = "https://www.kevinmessali.com";
export const SITE_NAME = "Kevin Messali";

/**
 * Search results and link previews. Keep it under ~160 characters or Google
 * truncates it mid-sentence, and lead with the present tense — this is the one
 * line that has to work with no page around it.
 */
export const SITE_DESCRIPTION =
	"Engineer in Paris. I build Ted, an AI friend people talk to every day, at Ooma. Before that: a blockchain in C++, a fintech for farmers, and two patents at 16.";

/**
 * The OG card's own subline. Set at 24px with room to breathe, so it can be the
 * hero sentence verbatim rather than the compressed search version.
 */
export const OG_SUBLINE =
	"I'm an engineer in Paris, French and Ukrainian. I build Ted, an AI friend people talk to every day, at Ooma.";

export const OG_IMAGE = `${SITE_URL}/api/og`;

/** Describes the card for anyone who cannot see it. */
export const OG_IMAGE_ALT =
	"A drafting sheet with a faint grid, reading: Kevin Messali, Paris. Hi, I'm Kevin.";
