/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// No `images` block: every image on the site is local now, so there are no
	// remote hosts left to allow. The old list was Notion, Unsplash and Flickr
	// for the retired blog, and it used the deprecated `domains` key, which Next
	// warned about on every boot.
	// The register on the homepage replaced the separate projects page, and the
	// blog is retired. Both run before filesystem routes.
	async redirects() {
		return [
			{ source: "/projects", destination: "/#work", permanent: true },
			{ source: "/blog", destination: "/", permanent: true },
			{ source: "/blog/:path*", destination: "/", permanent: true },
		];
	},
};

module.exports = nextConfig;
