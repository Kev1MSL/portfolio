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
};

module.exports = nextConfig;
