"use client";

import Link from "next/link";
import { industries } from "@/lib/content";
import { Reveal, SectionHeading } from "./Reveal";

export function IndustriesPreview() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Vertical software"
            title="Industry systems, not generic tools."
            copy="Hotel, travel, education, agency, and restaurant products — plus the internal platforms that keep those businesses moving."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06}>
              <Link
                href={`/industries/${item.slug}`}
                className="block rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.06] to-transparent p-6 transition hover:border-violet-400/35"
              >
                <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-500">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-xl font-medium text-white">{item.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.detail}</p>
                <p className="mt-4 text-xs tracking-wide text-cyan-300/80">Read more →</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
