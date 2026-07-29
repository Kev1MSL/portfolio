/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import React from "react";
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import {
	OG_IMAGE,
	OG_IMAGE_ALT,
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_URL,
} from "@/lib/site";

class PortfolioDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles]),
		};
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					{/* Every string below comes from lib/site.ts. Do not inline copy
					    here — that is how the old headline survived on every shared
					    link for months after it was cut from the page. */}
					<meta name="author" content={SITE_NAME} />
					<meta name="description" content={SITE_DESCRIPTION} />
					<meta name="theme-color" content="#FBFAF7" />

					<meta property="og:type" content="website" />
					<meta property="og:site_name" content={SITE_NAME} />
					<meta property="og:title" content={SITE_NAME} />
					<meta property="og:description" content={SITE_DESCRIPTION} />
					<meta property="og:url" content={SITE_URL} />
					<meta property="og:locale" content="en_US" />
					<meta property="og:image" content={OG_IMAGE} />
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="630" />
					<meta property="og:image:alt" content={OG_IMAGE_ALT} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content="@Kev1MSL" />
					<meta name="twitter:title" content={SITE_NAME} />
					<meta name="twitter:description" content={SITE_DESCRIPTION} />
					<meta name="twitter:image" content={OG_IMAGE} />
					<meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon/favicon-16x16.png"
					/>
				</Head>
				<body className={`flex flex-col min-h-screen`}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default PortfolioDocument;
