import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageHero";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Vertical software for hotel, travel, education, agencies, restaurants, and professional services.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        kicker="Industries"
        title="Purpose-built systems for the floor, not a generic CRM."
        copy="Hotel, travel, education, agency, restaurant, and professional-services products — with AI and integrations those businesses now expect."
      />

      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-8 sm:grid-cols-2 sm:px-8">
        {industries.map((item, i) => (
          <Link
            key={item.slug}
            href={`/industries/${item.slug}`}
            className="rounded-3xl border border-white/8 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8 transition hover:border-violet-400/35"
          >
            <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-500">0{i + 1}</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{item.name}</h2>
            <p className="mt-2 text-sm text-zinc-400">{item.detail}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">{item.overview}</p>
            <p className="mt-6 text-xs text-cyan-300/80">Open industry →</p>
          </Link>
        ))}
      </div>
      <CtaBand />
    </main>
  );
}
