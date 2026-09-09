import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/PageHero";
import { getIndustry, industries } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry" };
  return { title: industry.name, description: industry.overview };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const others = industries.filter((item) => item.slug !== industry.slug);

  return (
    <main>
      <section className="px-4 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.28em] text-cyan-300/80 uppercase sm:text-[11px] sm:tracking-[0.32em]">
            <Link href="/industries" className="hover:text-white">
              Industries
            </Link>
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {industry.name}
          </h1>
          <p className="mt-3 text-sm text-zinc-500">{industry.detail}</p>
          <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:mt-6 sm:text-lg">{industry.overview}</p>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <article className="glass rounded-3xl p-6">
            <h2 className="text-sm font-medium tracking-wide text-cyan-300/90 uppercase">
              Systems we build
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              {industry.systems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="glass rounded-3xl p-6">
            <h2 className="text-sm font-medium tracking-wide text-cyan-300/90 uppercase">
              Where AI belongs
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              {industry.ai.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fuchsia-400" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm text-zinc-500 uppercase tracking-wide">Other verticals</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/industries/${item.slug}`}
                className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-cyan-400/40 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={`Talk about ${industry.name.toLowerCase()} software`} />
    </main>
  );
}
