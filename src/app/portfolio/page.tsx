// src/app/portfolio/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "../../lib/config";
import PageHero from "../../components/ui/PageHero";
import CtaBanner from "../../components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `See our work — flex printing, event branding, hoardings, and digital campaigns delivered for 200+ clients across Indore and Madhya Pradesh. ${siteConfig.name}`,
};

const categories = [
  "All",
  "Flex Printing",
  "Hoarding & Signage",
  "Event Branding",
  "Digital Marketing",
  "Vehicle Wrapping",
  "LED & Neon",
];

// Placeholder — replace with Sanity data in Step 5
const projects = [
  {
    id: "1",
    title: "Retail Chain Rollout",
    category: "Flex Printing",
    tags: ["banners", "storefront"],
    bg: "from-orange-900/40",
  },
  {
    id: "2",
    title: "Corporate Conference",
    category: "Event Branding",
    tags: ["backdrop", "standees"],
    bg: "from-blue-900/40",
  },
  {
    id: "3",
    title: "Mall Hoarding Campaign",
    category: "Hoarding & Signage",
    tags: ["billboard", "outdoor"],
    bg: "from-purple-900/40",
  },
  {
    id: "4",
    title: "Food Brand Vehicle Wrap",
    category: "Vehicle Wrapping",
    tags: ["van", "fleet"],
    bg: "from-green-900/40",
  },
  {
    id: "5",
    title: "LED Showroom Display",
    category: "LED & Neon",
    tags: ["channel letters", "interior"],
    bg: "from-yellow-900/40",
  },
  {
    id: "6",
    title: "Real Estate Hoarding",
    category: "Hoarding & Signage",
    tags: ["outdoor", "site board"],
    bg: "from-red-900/40",
  },
  {
    id: "7",
    title: "Product Launch Event",
    category: "Event Branding",
    tags: ["stage", "arch gate"],
    bg: "from-pink-900/40",
  },
  {
    id: "8",
    title: "Hospital Signage System",
    category: "Hoarding & Signage",
    tags: ["wayfinding", "indoor"],
    bg: "from-teal-900/40",
  },
  {
    id: "9",
    title: "Social Media Campaign",
    category: "Digital Marketing",
    tags: ["meta ads", "creatives"],
    bg: "from-indigo-900/40",
  },
  {
    id: "10",
    title: "Restaurant Neon Sign",
    category: "LED & Neon",
    tags: ["neon flex", "fascia"],
    bg: "from-amber-900/40",
  },
  {
    id: "11",
    title: "School Annual Day Branding",
    category: "Event Branding",
    tags: ["banners", "backdrop"],
    bg: "from-cyan-900/40",
  },
  {
    id: "12",
    title: "Auto Showroom Wrap",
    category: "Vehicle Wrapping",
    tags: ["cars", "partial wrap"],
    bg: "from-lime-900/40",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        label="Our Portfolio"
        title="WORK THAT"
        titleAccent="SPEAKS."
        description="A selection of projects across print, branding, events, and digital. Real work. Real clients. Real results."
      />

      {/* Filter + Grid */}
      <section className="section-padding bg-brand-dark">
        <div className="section-container">
          {/* Category Filter — client-side interactivity in Step 5 */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-sm px-4 py-2 rounded-full border transition-all ${
                  cat === "All"
                    ? "bg-brand-orange border-brand-orange text-white"
                    : "border-white/15 text-white/50 hover:border-brand-orange/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-brand-charcoal border border-white/8 rounded-2xl overflow-hidden hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Image area */}
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${project.bg} to-brand-dark relative`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/10 text-sm">Project image</p>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/10 transition-colors flex items-center justify-center">
                    <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-brand-dark/80 px-4 py-2 rounded-full">
                      View Project
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold mt-1 mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
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
