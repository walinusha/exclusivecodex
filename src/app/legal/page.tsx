import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { legalEntity } from "@/lib/content";

export const metadata: Metadata = {
  title: "Legal",
  description: `${legalEntity.brand} is operated by ${legalEntity.name}.`,
};

export default function LegalPage() {
  return (
    <main>
      <PageHero
        kicker="Legal"
        title={`${legalEntity.name}.`}
        copy={`${legalEntity.brand} is a software brand of ${legalEntity.name}. This website is the public site of that company.`}
      />
      <div className="mx-auto max-w-3xl space-y-6 px-4 pb-20 text-base leading-relaxed text-zinc-300 sm:px-8 sm:pb-24">
        <p>
          {legalEntity.name} is the legal entity that owns and operates {legalEntity.brand}. Apple
          Developer Program enrollment, App Store seller name, contracts, and invoices are under{" "}
          {legalEntity.name} — not a trade name.
        </p>
        <p>
          The domain {legalEntity.website.replace("https://", "")} is associated with{" "}
          {legalEntity.name}. Use{" "}
          <Link href="/contact" className="text-cyan-300 hover:text-cyan-200">
            Contact
          </Link>{" "}
          for project briefs and official inquiries.
        </p>
        <p>
          How we handle information sent through this site is described in our{" "}
          <Link href="/privacy" className="text-cyan-300 hover:text-cyan-200">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
