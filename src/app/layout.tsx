import type { Metadata, Viewport } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import { Background } from "@/components/Background";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { legalEntity } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#030308",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://exclusivecodex.com"),
  title: {
    default: "ExclusiveCodeX — Think | Build | Beyond",
    template: "%s · ExclusiveCodeX",
  },
  description:
    "AI-powered software and automation. Intelligent business systems, SaaS, AI agents, web and mobile, APIs, and products.",
  keywords: [
    "ExclusiveCodeX",
    "Exclusive Holdings",
    "SaaS",
    "AI applications",
    "cloud applications",
    "white-label software",
    "web applications",
  ],
  authors: [{ name: legalEntity.name, url: legalEntity.website }],
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  openGraph: {
    title: "ExclusiveCodeX — Think | Build | Beyond",
    description:
      "AI-powered software and automation. SaaS, agents, and products that compound.",
    type: "website",
    images: [{ url: "/logo.jpg", width: 1024, height: 1024 }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: legalEntity.name,
  legalName: legalEntity.name,
  alternateName: [legalEntity.brand, "Exclusive Holdings (Pvt)"],
  url: legalEntity.website,
  brand: {
    "@type": "Brand",
    name: legalEntity.brand,
    url: legalEntity.website,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-zinc-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Background />
        <Header />
        <div className="flex-1 overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
