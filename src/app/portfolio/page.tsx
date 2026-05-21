// src/app/portfolio/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "../../lib/config";
import { sanityFetch } from "../../lib/sanity";
import { ALL_PROJECTS_QUERY } from "../../lib/queries";
import type { SanityProject } from "../../types/sanity";
import PageHero from "../../components/ui/PageHero";
import PortfolioGrid from "../../components/sections/PortfolioGrid";
import CtaBanner from "../../components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `See our work — flex printing, event branding, hoardings, and digital campaigns for 200+ clients across Indore. ${siteConfig.name}`,
};

export default async function PortfolioPage() {
  const projects = await sanityFetch<SanityProject[]>(ALL_PROJECTS_QUERY);

  return (
    <>
      <PageHero
        label="Our Portfolio"
        title="WORK THAT"
        titleAccent="SPEAKS."
        description="Real work. Real clients. Real results — across print, branding, events, and digital."
      />
      <PortfolioGrid projects={projects} />
      <CtaBanner />
    </>
  );
}
