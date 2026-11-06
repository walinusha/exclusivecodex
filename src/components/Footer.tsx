import Image from "next/image";
import Link from "next/link";
import { legalEntity, legalLinks, navLinks } from "@/lib/content";

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
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-zinc-600">
            ExclusiveCodeX is a product of {legalEntity.name}. This website is the public site of{" "}
            {legalEntity.name}.
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
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/6 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p>
            © {new Date().getFullYear()} {legalEntity.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="min-h-11 py-2 hover:text-zinc-300">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="tracking-[0.18em] uppercase sm:pb-2 sm:tracking-[0.28em]">Think | Build | Beyond</p>
      </div>
    </footer>
  );
}
