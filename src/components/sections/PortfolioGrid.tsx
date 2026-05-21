// src/components/sections/PortfolioGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import type { SanityProject } from "../../types/sanity";

const categories = [
  "All",
  "Flex Printing",
  "Hoarding & Signage",
  "Event Branding",
  "Digital Marketing",
  "Vehicle Wrapping",
  "LED & Neon",
];

// Fallback gradient colours for projects without images yet
const fallbackGradients = [
  "from-orange-900/40",
  "from-blue-900/40",
  "from-purple-900/40",
  "from-green-900/40",
  "from-yellow-900/40",
  "from-red-900/40",
  "from-pink-900/40",
  "from-teal-900/40",
  "from-indigo-900/40",
];

export default function PortfolioGrid({
  projects,
}: {
  projects: SanityProject[];
}) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  // If Sanity has no data yet, show placeholder cards
  const hasData = projects.length > 0;

  return (
    <section className="section-padding bg-brand-dark">
      <div className="section-container">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm px-4 py-2 rounded-full border transition-all ${
                active === cat
                  ? "bg-brand-orange border-brand-orange text-white"
                  : "border-white/15 text-white/50 hover:border-brand-orange/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {hasData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <div
                key={project._id}
                className="group relative bg-brand-charcoal border border-white/8 rounded-2xl overflow-hidden hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-4/3 relative overflow-hidden">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${fallbackGradients[i % fallbackGradients.length]} to-brand-dark`}
                    />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-brand-orange px-4 py-2 rounded-full">
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
                  {project.tags?.length > 0 && (
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
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty state — before you add Sanity content
          <div className="text-center py-20 border border-white/8 rounded-2xl">
            <p className="text-6xl mb-4">🖼️</p>
            <h3 className="font-display text-3xl text-white mb-2">
              NO PROJECTS YET
            </h3>
            <p className="text-white/40 text-sm max-w-sm mx-auto">
              Add your first project in the Sanity Studio at{" "}
              <code className="text-brand-orange">localhost:3333</code>
            </p>
          </div>
        )}

        {/* No filter results */}
        {hasData && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/40">No projects in this category yet.</p>
            <button
              onClick={() => setActive("All")}
              className="mt-4 text-brand-orange text-sm hover:underline"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
