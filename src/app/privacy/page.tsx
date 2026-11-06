import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { legalEntity } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${legalEntity.name} handles information on exclusivecodex.com.`,
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        kicker="Privacy"
        title="How we handle information."
        copy={`${legalEntity.name} operates exclusivecodex.com and the ExclusiveCodeX brand. This policy covers this website.`}
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 pb-20 text-base leading-relaxed text-zinc-300 sm:px-8 sm:pb-24">
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">Who we are</h2>
          <p>
            {legalEntity.name} (“we”) operates this website and the {legalEntity.brand} brand. If
            you contact us, you are contacting {legalEntity.name}.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">What we collect</h2>
          <p>
            The contact form asks for your name, email address, company (optional), the capability
            you need, and a project brief. We use that information to reply to your inquiry. We do
            not sell it.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">Hosting and logs</h2>
          <p>
            The site is hosted by our infrastructure provider. Standard server logs (such as IP
            address, browser, and pages requested) may be created to keep the site running and
            secure.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">Contact</h2>
          <p>
            Questions about this policy: use the{" "}
            <Link href="/contact" className="text-cyan-300 hover:text-cyan-200">
              contact form
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
