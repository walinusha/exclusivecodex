import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import { BusinessModel, ProductLine } from "@/components/Strategy";
import { studioPoints, studioStory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "ExclusiveCodeX is an AI-powered software and automation company. Think. Build. Beyond.",
};

export default function StudioPage() {
  return (
    <main>
      <PageHero
        kicker={studioStory.kicker}
        title={studioStory.title}
        copy={studioStory.lead}
      />

      <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-8">
        {studioStory.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-zinc-300">
            {paragraph}
          </p>
        ))}
      </div>

      <section className="px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {studioPoints.map((item) => (
            <article key={item.title} className="glass rounded-3xl p-5 sm:p-7">
              <h2 className="text-xl font-medium text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <BusinessModel />
      <ProductLine />
      <CtaBand title="Work with the studio" />
    </main>
  );
}
