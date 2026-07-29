import type { GetServerSideProps } from "next";

/**
 * The register on the homepage replaced this page. `redirects()` in
 * next.config.js catches /projects at the routing layer; this keeps the route
 * correct anywhere that config is bypassed.
 */
export const getServerSideProps: GetServerSideProps = async () => ({
	redirect: { destination: "/#work", permanent: true },
});

export default function Projects() {
	return null;
}
