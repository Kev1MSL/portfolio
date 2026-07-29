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
					<meta content={"Kevin Messali"} name={"author"} />
					<meta
						content={
							"I've shipped something every year since I was 16. Patents, a blockchain from scratch, a fintech for farmers, and now Ted, an AI friend people talk to every day."
						}
						name={"description"}
					/>
					<meta
						content={"Kevin Messali, portfolio, engineer, founder"}
						name={"keywords"}
					/>

					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Kevin Messali" />
					<meta property="og:title" content="Kevin Messali" />
					<meta
						property="og:description"
						content="I've shipped something every year since I was 16. Patents, a blockchain from scratch, a fintech for farmers, and now Ted, an AI friend people talk to every day."
					/>
					<meta
						property="og:image"
						content="https://www.kevinmessali.com/api/og"
					/>
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="630" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content="@Kev1MSL" />
					<meta name="twitter:title" content="Kevin Messali" />
					<meta
						name="twitter:description"
						content="I've shipped something every year since I was 16."
					/>
					<meta
						name="twitter:image"
						content="https://www.kevinmessali.com/api/og"
					/>
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
