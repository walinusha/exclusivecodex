import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Layers } from "lucide-react";
import { CtaBand } from "@/components/PageHero";
import { getGroup, getService, services } from "@/lib/content";
import { Fit, serviceIcons } from "@/lib/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const group = getGroup(service.groupId);
  const Icon = serviceIcons[service.slug] ?? Layers;
  const related = services
    .filter((item) => item.groupId === service.groupId && item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main>
      <section className="px-4 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.28em] text-cyan-300/80 uppercase sm:text-[11px] sm:tracking-[0.32em]">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            {group ? ` / ${group.kicker}` : null}
          </p>
          <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              {service.name}
            </h1>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/8 text-cyan-300">
              <Icon size={22} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500">
            <span>Studio fit</span>
            <Fit value={service.fit} />
          </div>
          <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:mt-6 sm:text-lg">{service.overview}</p>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <DetailCard title="Who it is for" items={service.whoFor} />
          <DetailCard title="What we deliver" items={service.deliverables} />
          <DetailCard title="What changes" items={service.outcomes} />
        </div>
      </section>

      {related.length > 0 ? (
        <section className="px-4 py-10 sm:px-8 sm:py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-medium tracking-wide text-zinc-400 uppercase">
              Related in {group?.title}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="rounded-2xl border border-white/8 p-5 hover:border-cyan-400/30"
                >
                  <h3 className="font-medium text-white">{item.name}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title={`Start a ${service.name.toLowerCase()} brief`}
        copy="Tell us the workflow, the users, and the constraint. We will reply with a path."
        href={`/contact?service=${encodeURIComponent(service.name)}`}
      />
    </main>
  );
}

function DetailCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="glass rounded-3xl p-6">
      <h2 className="text-sm font-medium tracking-wide text-cyan-300/90 uppercase">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
