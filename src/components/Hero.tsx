"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const tagline = ["Think", "Build", "Beyond"] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="top"
      className="relative flex min-h-0 flex-col items-center justify-center px-4 pb-16 pt-24 sm:min-h-svh sm:px-8 sm:pb-24 sm:pt-28"
    >
      <motion.div
        ref={wrapRef}
        initial={reduce ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center justify-center"
      >
        <div className="logo-stage" aria-hidden>
          <div className="logo-stage-glow" />
          <div className="logo-stage-core" />
          <div className="logo-stage-ring" />
          <div className="logo-stage-orbit" />
          <div className="logo-stage-inner" />
        </div>
        <motion.div
          className="relative z-10"
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/logo-mark.png"
            alt="ExclusiveCodeX mark"
            width={621}
            height={385}
            priority
            className="logo-mark mx-auto h-auto w-[min(68vw,240px)] sm:w-[min(84vw,400px)]"
            unoptimized
          />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
        className="mt-3 px-1 text-center text-3xl font-semibold tracking-tight break-words sm:mt-4 sm:text-6xl md:text-7xl"
      >
        Exclusive<span className="codex-text">CodeX</span>
      </motion.h1>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] tracking-[0.22em] text-zinc-400 uppercase sm:mt-5 sm:gap-3 sm:text-xs sm:tracking-[0.5em]">
        {tagline.map((word, i) => (
          <motion.span
            key={word}
            className="flex items-center gap-2 sm:gap-3"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + i * 0.14, duration: 0.5 }}
          >
            {i > 0 ? <span className="text-cyan-400/70">|</span> : null}
            {word}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="mt-5 max-w-2xl px-1 text-center text-[15px] leading-relaxed text-zinc-300 sm:mt-7 sm:text-lg"
      >
        We build intelligent business systems, SaaS platforms, AI agents,
        web and mobile applications, APIs, and software products.
      </motion.p>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.7 }}
        className="mt-7 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
      >
        <Link href="/contact" className="btn-primary rounded-full px-7 py-3.5 text-center text-sm sm:py-3">
          Start a project
        </Link>
        <Link href="/services" className="btn-ghost rounded-full px-7 py-3.5 text-center text-sm text-white sm:py-3">
          Explore capabilities
        </Link>
      </motion.div>

      <motion.a
        href="#capabilities"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10 hidden items-center gap-2 text-xs tracking-[0.28em] text-zinc-500 uppercase sm:absolute sm:bottom-8 sm:mt-0 sm:flex"
      >
        Scroll
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
