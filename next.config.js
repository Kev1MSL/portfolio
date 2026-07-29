/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"www.notion.so",
			"notion.so",
			"images.unsplash.com",
			"s3.us-west-2.amazonaws.com",
			"kevinmessali.com",
			"live.staticflickr.com",
		],
	},
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
