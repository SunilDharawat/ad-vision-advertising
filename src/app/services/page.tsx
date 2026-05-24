// src/app/services/page.tsx
import type { Metadata } from "next";
import { ArrowRight, CheckCircle, Send, Video } from "lucide-react";
import Link from "next/link";
import { siteConfig, services } from "../../lib/config";
import PageHero from "../../components/ui/PageHero";
import CtaBanner from "../../components/sections/CtaBanner";
import Image from "next/image";
import { cloudinaryUrl } from "@/src/lib/cloudinary";
import ImageSlider from "@/src/components/ui/ImageSlider";

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
    icon: "Flex-Printing-Logo_vfhebp",
    publicId: [
      "Shop-Banner-1_arckat",
      "Event-Activity-1_lbqm79",
      "Hoarding-1_hoxapt",
      "Construction-Site-1_x9sgja",
      "State_Bank_Flex_q7xhs3",
    ],
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
    socialMediaLink: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/flex_printing_indore/",
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/flexprintingindore/",
      },
    ],
  },
  {
    slug: "hoarding-signage",
    icon: "hoarding-logo_zizf0x",
    publicId: [
      "Acadmy_lzddmu",
      "Max_woman_iillms",
      "Board_tqtfe9",
      "Beer_Neon_bt5rvy",
      "Club_poatl9",
    ],
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
    socialMediaLink: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/flex_printing_indore/",
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/flexprintingindore/",
      },
    ],
  },
  {
    slug: "event-branding",
    icon: "event-logo_cj0ipb",
    publicId: ["Indore_Fastival_rzvgr5", "Event_dljet3", "Acadmy_lzddmu"],
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
    socialMediaLink: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/flex_printing_indore/",
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/flexprintingindore/",
      },
    ],
  },
  {
    slug: "digital-marketing",
    icon: "digital-logo_anto7c",
    publicId: [
      "DMart_kadpgv",
      "Garage_flex_mokxfq",
      "Metro_dxyjeo",
      "Corporate-2_xulq05",
    ],
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
    socialMediaLink: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/flex_printing_indore/",
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/flexprintingindore/",
      },
    ],
  },
  {
    slug: "vehicle-wrapping",
    icon: "van-logo_ol5u06",
    publicId: ["All_van_hc1qfd", "Van_activity_nthhii"],
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
    socialMediaLink: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/flex_printing_indore/",
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/flexprintingindore/",
      },
    ],
  },
  {
    slug: "led-neon-displays",
    icon: "led-logo_btyjun",
    publicId: [
      "HQ_trjpqe",
      "Max_woman_iillms",
      "Board_tqtfe9",
      "Beer_Neon_bt5rvy",
    ],
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
    socialMediaLink: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/flex_printing_indore/",
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/flexprintingindore/",
      },
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
                  <Image
                    src={cloudinaryUrl(service.icon)}
                    alt={service.title}
                    width={150}
                    height={150}
                  />
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
                      What&#39;s Included
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

                  {/* CTA + Social Icons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-500 text-white text-sm font-medium px-6 py-3 rounded-full transition-all"
                    >
                      Get a Quote for This <ArrowRight size={14} />
                    </Link>

                    <div className="flex items-center gap-3">
                      {/* Instagram */}
                      <a
                        href="https://instagram.com/advisionadvertising"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="group flex items-center gap-2 w-11 hover:w-36 h-11 px-3 rounded-full border border-white/10 bg-white/5 hover:bg-pink-500/20 hover:border-pink-500/30 text-white/70 hover:text-pink-400 overflow-hidden transition-all duration-300"
                      >
                        <Send size={18} className="shrink-0" />

                        <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          Instagram
                        </span>
                      </a>

                      {/* YouTube */}
                      <a
                        href="https://youtube.com/@advisionadvertising"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="group flex items-center gap-2 w-11 hover:w-32 h-11 px-3 rounded-full border border-white/10 bg-white/5 hover:bg-red-500/20 hover:border-red-500/30 text-white/70 hover:text-red-400 overflow-hidden transition-all duration-300"
                      >
                        <Video size={18} className="shrink-0" />

                        <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          YouTube
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visual side */}
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="bg-brand-charcoal border border-white/8 rounded-2xl overflow-hidden">
                    {service.publicId ? (
                      <ImageSlider
                        publicIds={service.publicId}
                        alt={service.title}
                        aspectRatio="4/3"
                        autoplayDelay={3500}
                      />
                    ) : (
                      // Fallback placeholder for services without publicId yet
                      <div className="aspect-[4/3] bg-brand-charcoal flex items-center justify-center">
                        <span className="text-white/20 text-sm">
                          Image coming soon
                        </span>
                      </div>
                    )}
                    {/* Use cases */}
                    <div className="p-5 border-t border-white/8">
                      <p className="text-white/30 text-xs uppercase tracking-widest mb-3">
                        Common Use Cases
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((u) => (
                          <span
                            key={u}
                            className="group relative overflow-hidden rounded-full border border-white/10 px-3 py-1 text-xs text-white"
                          >
                            {/* Animated background fill */}
                            <span className="absolute inset-0 bg-gradient-to-r from-brand-orange to-orange-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                            {/* Text */}
                            <span className="relative z-10">{u}</span>
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
