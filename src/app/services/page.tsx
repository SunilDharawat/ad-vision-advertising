// src/app/services/page.tsx
import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig, services } from "../../lib/config";
import PageHero from "../../components/ui/PageHero";
import CtaBanner from "../../components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Flex printing, hoardings, event branding, digital marketing, vehicle wraps and LED signage in Indore. ${siteConfig.name} delivers end-to-end advertising solutions.`,
  keywords: [
    "flex printing Indore",
    "hoarding advertising",
    "event branding MP",
    "vehicle wrap Indore",
    "LED signage",
  ],
};

const serviceDetails = [
  {
    slug: "flex-printing",
    icon: "🖨️",
    title: "Flex Printing",
    tagline: "Large format. Vibrant colour. Built to last.",
    description:
      "Our flex printing uses premium-grade vinyl and UV-resistant inks to deliver banners, boards, and hoardings that stay vivid through rain, sun, and dust. Available in any custom size.",
    features: [
      "Sun & rain resistant inks",
      "Custom sizes up to 120ft",
      "Same-day printing available",
      "Matte, glossy & backlit options",
    ],
    useCases: [
      "Shop front banners",
      "Road-facing hoardings",
      "Exhibition backdrops",
      "Construction site boards",
    ],
  },
  {
    slug: "hoarding-signage",
    icon: "🏗️",
    title: "Hoarding & Signage",
    tagline: "Own the street. Own the attention.",
    description:
      "From roadside hoardings to shop fascia boards and directional signage — we handle fabrication, printing, and installation. Built on steel or aluminium frames for long-term outdoor durability.",
    features: [
      "Steel & aluminium frame structures",
      "Full installation service",
      "Night-visible options",
      "Permit guidance available",
    ],
    useCases: [
      "Roadside billboards",
      "Shop name boards",
      "Mall directories",
      "Industrial signage",
    ],
  },
  {
    slug: "event-branding",
    icon: "🎪",
    title: "Event Branding",
    tagline: "Every surface. Every moment. Your brand.",
    description:
      "We turn venues into brand experiences. From stage backdrops and standees to gate arches and table runners — complete event branding that makes every photo shareable.",
    features: [
      "Stage & backdrop fabrication",
      "Standee & rollup printing",
      "Gate arches & canopies",
      "Day-of installation team",
    ],
    useCases: [
      "Corporate conferences",
      "Product launches",
      "Weddings & social events",
      "Trade shows & expos",
    ],
  },
  {
    slug: "digital-marketing",
    icon: "📱",
    title: "Digital Marketing",
    tagline: "Found online. Chosen over competitors.",
    description:
      "We manage your entire digital presence — from Google Business Profile and social media to paid ad campaigns. Measurable results, local expertise, transparent reporting.",
    features: [
      "Google Ads & Meta Ads",
      "Social media management",
      "SEO & Google Business",
      "Monthly performance reports",
    ],
    useCases: [
      "Local business visibility",
      "Lead generation",
      "Brand awareness campaigns",
      "E-commerce promotions",
    ],
  },
  {
    slug: "vehicle-wrapping",
    icon: "🚐",
    title: "Vehicle Wrapping",
    tagline: "Your brand. Moving through the city.",
    description:
      "Full and partial vehicle wraps that turn your fleet into rolling billboards. Applied using cast vinyl for a smooth, long-lasting finish that won't damage paint.",
    features: [
      "Cast vinyl — no paint damage",
      "Full & partial wraps",
      "Car, van, bus & truck",
      "Design included in package",
    ],
    useCases: [
      "Delivery fleets",
      "Service vehicles",
      "Corporate cars",
      "Food trucks",
    ],
  },
  {
    slug: "led-neon-displays",
    icon: "💡",
    title: "LED & Neon Displays",
    tagline: "Glow. Stand out. Be remembered.",
    description:
      "Custom LED channel letters, backlit panels, and neon-flex signs that make your shop or office impossible to miss — day or night. Energy-efficient and weatherproof.",
    features: [
      "Indoor & outdoor rated",
      "Custom shapes & fonts",
      "Energy-efficient LEDs",
      "Remote colour control options",
    ],
    useCases: [
      "Shop fronts",
      "Restaurant interiors",
      "Hotel lobbies",
      "Showroom displays",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="EVERYTHING YOUR"
        titleAccent="BRAND NEEDS."
        description="Six core service areas. One reliable team. Whether you need a single banner or a city-wide campaign, we deliver quality that represents your business well."
      />

      {/* Services Detail */}
      <section className="section-padding bg-brand-dark">
        <div className="section-container">
          <div className="flex flex-col gap-24">
            {serviceDetails.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text side */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-2">
                    {service.tagline}
                  </p>
                  <h2 className="font-display text-5xl text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-white/50 text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
                      What's Included
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-white/60 text-sm"
                        >
                          <CheckCircle
                            size={14}
                            className="text-brand-orange shrink-0"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-500 text-white text-sm font-medium px-6 py-3 rounded transition-all"
                  >
                    Get a Quote for This <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Visual side */}
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="bg-brand-charcoal border border-white/8 rounded-2xl overflow-hidden">
                    {/* Image placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-brand-orange/10 to-brand-dark flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-3">{service.icon}</div>
                        <p className="text-white/20 text-sm">
                          Add {service.title} image here
                        </p>
                      </div>
                    </div>
                    {/* Use cases */}
                    <div className="p-5 border-t border-white/8">
                      <p className="text-white/30 text-xs uppercase tracking-widest mb-3">
                        Common Use Cases
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((u) => (
                          <span
                            key={u}
                            className="text-xs bg-white/5 border border-white/10 text-white/60 px-3 py-1 rounded-full"
                          >
                            {u}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
