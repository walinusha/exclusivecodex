import { Hero } from "@/components/Hero";
import { IndustriesPreview } from "@/components/Industries";
import { Marquee } from "@/components/Marquee";
import { ProcessPreview } from "@/components/Process";
import { CtaBand } from "@/components/PageHero";
import { BusinessModel, Divisions, ProductLine } from "@/components/Strategy";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Divisions />
      <ProductLine />
      <BusinessModel />
      <div className="px-4 pb-8 text-center sm:px-8">
        <Link href="/services" className="btn-ghost inline-flex rounded-full px-6 py-3 text-sm text-white">
          All 18 capabilities
        </Link>
      </div>
      <ProcessPreview />
      <IndustriesPreview />
      <CtaBand />
    </main>
  );
}
