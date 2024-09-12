/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import React from "react";
import { Analytics } from "@vercel/analytics/react";
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
							"Welcome on my website! Here you will find my portfolio with all my experiences and my blog."
						}
						name={"description"}
					/>
					<meta content={"Kevin Messali, portfolio, blog"} name={"keywords"} />
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
					<Analytics />
				</body>
			</Html>
		);
	}
}

export default PortfolioDocument;
