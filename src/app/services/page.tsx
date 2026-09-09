import type { Metadata } from "next";
import Link from "next/link";
import { Layers } from "lucide-react";
import { CtaBand, PageHero } from "@/components/PageHero";
import { Divisions } from "@/components/Strategy";
import { serviceGroups } from "@/lib/content";
import { Fit, serviceIcons } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SaaS, cloud, web, mobile, AI agents, integrations, white-label, and vertical software from ExclusiveCodeX.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        kicker="Services"
        title="Five divisions. Eighteen capabilities."
        copy="SaaS products, AI automation, cloud platforms, web and mobile, plugins and APIs — listed in full below. Open any line for who it is for and what we deliver."
      />
      <Divisions />

      <div className="mx-auto max-w-6xl space-y-12 px-4 pb-8 sm:space-y-16 sm:px-8">
        {serviceGroups.map((group) => (
          <section key={group.id}>
            <p className="font-mono text-[11px] tracking-[0.32em] text-violet-300/80 uppercase">
              {group.kicker}
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-white">{group.title}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => {
                const Icon = serviceIcons[item.slug] ?? Layers;
                return (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className={`rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/30 ${
                      item.fit === 5 ? "card-beam" : ""
                    }`}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/8 text-cyan-300">
                        <Icon size={16} />
                      </div>
                      <Fit value={item.fit} />
                    </div>
                    <h3 className="font-medium text-white">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.summary}</p>
                    <p className="mt-4 text-xs text-cyan-300/80">View details →</p>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      <CtaBand />
    </main>
  );
}
