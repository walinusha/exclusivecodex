import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import { BusinessModel, Divisions, PlatformCore, ProductLine } from "@/components/Strategy";
import { positioning } from "@/lib/content";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "ExclusiveCodeX product ecosystem: BusinessOS, MarketingOS, TravelOS, AI Workforce, and a reusable SaaS core.",
};

export default function PlatformPage() {
  return (
    <main>
      <PageHero
        kicker="Platform"
        title="One core. Many products."
        copy={positioning.flagship}
      />
      <Divisions />
      <ProductLine />
      <PlatformCore />
      <BusinessModel />
      <CtaBand title="Build on the ExclusiveCodeX core" />
    </main>
  );
}
