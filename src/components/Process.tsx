"use client";

import Link from "next/link";
import { processSteps } from "@/lib/content";
import { Reveal, SectionHeading } from "./Reveal";

export function ProcessPreview() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="The way we work"
            title="Think. Build. Beyond."
            copy="Three words on the mark. One delivery loop from first brief to a product that keeps compounding."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          <div className="pointer-events-none absolute top-12 right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-cyan-400/0 via-cyan-300/50 to-fuchsia-400/0 lg:block" />
          {processSteps.map((step, i) => (
            <Reveal key={step.key} delay={i * 0.1}>
              <article className="glass relative rounded-3xl p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-sm font-semibold text-zinc-950">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-mono text-xs tracking-[0.35em] text-cyan-300 uppercase">
                  {step.key}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/process" className="btn-ghost inline-flex rounded-full px-6 py-3 text-sm text-white">
            How a project runs
          </Link>
        </div>
      </div>
    </section>
  );
}
