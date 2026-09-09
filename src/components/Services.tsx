"use client";

import Link from "next/link";
import { Layers } from "lucide-react";
import { serviceGroups } from "@/lib/content";
import { Fit, serviceIcons } from "@/lib/icons";
import { Reveal, SectionHeading } from "./Reveal";

export function ServicesPreview() {
  return (
    <section id="capabilities" className="scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Capabilities"
            title="Eighteen ways we build the future of your software."
            copy="Each line has its own page — what we ship, who it is for, and what you walk away with."
          />
        </Reveal>

        <div className="mt-16 space-y-16">
          {serviceGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.05}>
              <div className="mb-6">
                <p className="font-mono text-[11px] tracking-[0.32em] text-violet-300/80 uppercase">
                  {group.kicker}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-white">{group.title}</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => {
                  const Icon = serviceIcons[item.slug] ?? Layers;
                  return (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className={`group rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] ${
                        item.fit === 5 ? "card-beam" : ""
                      }`}
                    >
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/8 text-cyan-300">
                          <Icon size={16} />
                        </div>
                        <Fit value={item.fit} />
                      </div>
                      <h4 className="text-base font-medium text-white">{item.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {item.summary}
                      </p>
                      <p className="mt-4 text-xs tracking-wide text-cyan-300/80">
                        View details →
                      </p>
                    </Link>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-ghost inline-flex rounded-full px-6 py-3 text-sm text-white">
            All services
          </Link>
        </div>
      </div>
    </section>
  );
}
