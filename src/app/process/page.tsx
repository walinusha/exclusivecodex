import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How ExclusiveCodeX runs a project: Think, Build, and Beyond — from first brief to a product that compounds.",
};

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        kicker="Process"
        title="Think. Build. Beyond."
        copy="We do not vanish after a deck. The loop is discovery, a shipped product, then the work that makes it compound — automation, white-label, and the next surface."
      />

      <div className="mx-auto max-w-3xl space-y-6 px-4 pb-8 sm:space-y-10 sm:px-8">
        {processSteps.map((step, i) => (
          <article key={step.key} className="glass rounded-3xl p-5 sm:p-8">
            <div className="flex items-start gap-3 sm:items-center sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-sm font-semibold text-zinc-950">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="font-mono text-xs tracking-[0.35em] text-cyan-300 uppercase">
                  {step.key}
                </p>
                <h2 className="text-xl font-semibold text-white sm:text-2xl">{step.title}</h2>
              </div>
            </div>
            <p className="mt-5 text-base leading-relaxed text-zinc-300">{step.body}</p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-400">
              {step.details.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="px-4 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/8 p-5 sm:p-8">
          <h2 className="text-xl font-semibold text-white">How we engage</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Most work starts as a paid discovery slice, then a build in production-shaped
            environments. Retainers cover the Beyond phase: agents, new tenants, and the
            unglamorous work of keeping the product honest. If the brief needs a different
            shape of delivery, we will say so.
          </p>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
