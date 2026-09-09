"use client";

import { marquee } from "@/lib/content";

export function Marquee() {
  const row = [...marquee, ...marquee];

  return (
    <div className="relative overflow-x-hidden border-y border-white/6 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg to-transparent sm:w-24" />
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-10">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-mono text-xs tracking-[0.28em] text-zinc-500 uppercase"
            >
              <span className="mr-10 text-cyan-400/50">{"/>"}</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
