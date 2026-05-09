// src/app/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "../lib/config";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import ServicesSection from "../components/sections/ServicesSection";
import PortfolioPreview from "../components/sections/PortfolioPreview";
import WhyUsSection from "../components/sections/WhyUsSection";
import CtaBanner from "../components/sections/CtaBanner";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Flex Printing & Advertising Agency in Indore`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioPreview />
      <WhyUsSection />
      <CtaBanner />
    </>
  );
}
