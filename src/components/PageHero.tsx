import Link from "next/link";

export function PageHero({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="px-4 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-mono text-[10px] tracking-[0.28em] text-cyan-300/80 uppercase sm:text-[11px] sm:tracking-[0.38em]">
          {kicker}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400 sm:mt-5 sm:text-lg">
          {copy}
        </p>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to brief the studio?",
  copy = "Tell us the product, the industry, or the workflow. We will come back with a clear path.",
  href = "/contact",
}: {
  title?: string;
  copy?: string;
  href?: string;
}) {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-20">
      <div className="glass mx-auto max-w-4xl rounded-3xl px-5 py-10 text-center sm:px-8 sm:py-12">
        <h2 className="text-2xl font-semibold text-balance text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
          {copy}
        </p>
        <Link
          href={href}
          className="btn-primary mt-8 inline-flex w-full max-w-xs justify-center rounded-full px-7 py-3.5 text-sm sm:w-auto sm:py-3"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
