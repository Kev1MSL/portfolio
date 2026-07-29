import Head from "next/head";
import Image from "next/image";
import React from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import Register from "@/components/register/Register";
import { SITE_URL } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Messali</title>
        <link rel="canonical" href={SITE_URL} />
      </Head>
      <SiteNav />
      <main className="mx-auto w-full min-w-0 max-w-[880px] flex-1 px-6 sm:px-10">
        <section className="pb-12 pt-10 sm:pt-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
            <div className="min-w-0">
              {/* The big type is spent on a greeting, not a claim. The page
							    opens warm and lets the work below do the arguing. */}
              <h1 className="display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.1] text-ink">
                hi, i&apos;m kevin.
              </h1>
              <p className="mt-5 max-w-[44ch] text-[17px] leading-relaxed text-ink">
                I&apos;m an engineer in Paris, French and Ukrainian. I build
                Ted, an AI friend people talk to every day, at Ooma.
              </p>
              <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-lead">
                Before that: a blockchain in C++, a fintech for farmers, and two
                patents I wrote and filed myself at 16. I studied math and CS
                at École Polytechnique, and did Entrepreneur First Paris in 2023
                as the youngest in the cohort.
              </p>
            </div>
            <figure className="shrink-0">
              <Image
                src="/kevin-cat.jpg"
                alt="Kevin Messali at home with his cat"
                width={1000}
                height={818}
                priority
                className="w-[260px] object-cover sm:w-[320px]"
              />
            </figure>
          </div>
        </section>

        {/* No section banner — each era brings its own heading, and a
				    "WORK · 2018 — now" bar sitting on top of them is the résumé
				    talking. */}
        <section className="pb-8">
          <h2 className="sr-only">Work</h2>
          <Register />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
