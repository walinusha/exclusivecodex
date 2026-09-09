"use client";

import Link from "next/link";
import { businessLayers, divisions, platformCore, productPortfolio, travelOsPlus } from "@/lib/content";
import { Reveal, SectionHeading } from "./Reveal";

export function Divisions() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Five divisions"
            title="AI + SaaS + business automation."
            copy="Not a list of every possible job. Five lines we actually build around — with custom systems as the engine and products as the compounding bet."
          />
        </Reveal>

        <div className="mt-12 space-y-4">
          {divisions.map((item, i) => (
            <Reveal key={item.no} delay={i * 0.04}>
              <Link
                href={item.href}
                className="glass block rounded-3xl p-5 transition hover:border-cyan-400/30 sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                  <p className="font-mono text-xs tracking-[0.28em] text-cyan-300/80">{item.no}</p>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.summary}</p>
                    <ul className="mt-4 space-y-1.5 text-sm text-zinc-300">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductLine() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Product ecosystem"
            title="One company. A stack of products."
            copy="Intellectual property, not a generic web-and-mobile shop. Modules become products. Products become an ecosystem."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productPortfolio.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <Link
                href={item.href}
                className="block rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition hover:border-cyan-400/30"
              >
                <p className="font-mono text-[10px] tracking-[0.28em] text-zinc-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.line}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <article className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-5 sm:p-7">
            <h3 className="text-lg font-medium text-white">{travelOsPlus.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{travelOsPlus.body}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export function BusinessModel() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="How value compounds"
            title="Services. Reusable core. SaaS."
            copy="Client work pays for the studio. The same work becomes modules. The modules become products other companies subscribe to."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {businessLayers.map((item, i) => (
            <Reveal key={item.no} delay={i * 0.08}>
              <article className="glass h-full rounded-3xl p-6 sm:p-7">
                <p className="font-mono text-xs tracking-[0.28em] text-cyan-300/80">{item.no}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlatformCore() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Shared architecture"
            title="A core you configure, not a blank codebase."
            copy="Every new platform starts from the same spine. Launch many vertical products from one underlying technology."
          />
        </Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {platformCore.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
