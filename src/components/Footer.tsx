import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-8 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src="/logo-mark.png"
              alt=""
              width={621}
              height={385}
              className="logo-mark h-7 w-auto"
              unoptimized
            />
            <span className="font-medium">
              Exclusive<span className="codex-text">CodeX</span>
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-zinc-500">
            Think. Build. Beyond. AI-driven software for products that last.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-400">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="min-h-11 py-2 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/6 pt-6 text-xs text-zinc-600 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} ExclusiveCodeX. All rights reserved.</p>
        <p className="tracking-[0.18em] uppercase sm:tracking-[0.28em]">Think | Build | Beyond</p>
      </div>
    </footer>
  );
}
