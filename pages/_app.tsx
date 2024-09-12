import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import "react-tooltip/dist/react-tooltip.css";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", (url) => {
	NProgress.start();
});

Router.events.on("routeChangeComplete", (url) => {
	NProgress.done(false);
});
export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
