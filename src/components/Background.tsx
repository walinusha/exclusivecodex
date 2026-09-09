"use client";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="orb -left-24 top-[-8%] h-[420px] w-[420px] bg-cyan-500/20" />
      <div className="orb right-[-8%] top-[8%] h-[480px] w-[480px] bg-violet-600/18" />
      <div className="orb bottom-[-10%] left-1/3 h-[380px] w-[380px] bg-fuchsia-600/12" />
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/20 to-bg" />
    </div>
  );
}
