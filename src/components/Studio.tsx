"use client";

import Link from "next/link";
import { studioPoints } from "@/lib/content";
import { Reveal, SectionHeading } from "./Reveal";

export function StudioPreview() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="The studio"
            title="AI-powered. Built to compound."
            copy="ExclusiveCodeX is an AI-powered software and automation company — SaaS, agents, and platforms you can subscribe to or white-label."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {studioPoints.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="glass rounded-3xl p-7">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/studio" className="btn-ghost inline-flex rounded-full px-6 py-3 text-sm text-white">
            About ExclusiveCodeX
          </Link>
        </div>
      </div>
    </section>
  );
}
