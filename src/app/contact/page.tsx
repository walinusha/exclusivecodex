import type { Metadata } from "next";
import { ContactForm } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with ExclusiveCodeX. Tell us what you want to build.",
};

type Props = { searchParams: Promise<{ service?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams;
  const match = services.find((item) => item.name === service || item.slug === service);

  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Tell us what you want to build."
        copy="Share the product, the industry, or the workflow. We reply with a path — not a vague ‘let’s hop on a call’ loop."
      />
      <div className="px-4 pb-20 sm:px-8 sm:pb-24">
        <ContactForm heading={false} defaultService={match?.name ?? service ?? ""} />
      </div>
    </main>
  );
}
