import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import { fontVariables } from "@/lib/fonts";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
	NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
	NProgress.done(false);
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		// next/font is not available in _document, so the variables are defined
		// here and the base family is set on the same element that defines them.
		<div className={`${fontVariables} font-sans flex min-h-screen flex-col`}>
			<div className="sheet mx-auto flex w-full min-w-0 max-w-[1120px] flex-1 flex-col border-rule sm:border-x">
				<Component {...pageProps} />
			</div>
			<Analytics mode={"production"} />
		</div>
	);
}
