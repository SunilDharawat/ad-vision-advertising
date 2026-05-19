// src/components/sections/PortfolioPreview.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionLabel from "../../components/ui/SectionLabel";
import { cloudinaryUrl } from "@/src/lib/cloudinary";

const portfolioItems = [
  {
    id: "1",
    title: "Retail Chain Rollout",
    category: "Flex Printing",
    image: "Flex-Printing-1_rtzo4l",
    bg: "from-orange-900/40 to-brand-dark",
    size: "lg",
  },
  {
    id: "2",
    title: "Corporate Event Branding",
    category: "Event Branding",
    image: "Corporate-1_un7q3d",
    bg: "from-blue-900/40 to-brand-dark",
    size: "sm",
  },
  {
    id: "3",
    title: "Mall Hoarding Campaign",
    category: "Outdoor Signage",
    image: "Mall-1_rp9ydh",
    bg: "from-purple-900/40 to-brand-dark",
    size: "sm",
  },
  {
    id: "4",
    title: "Food Brand Vehicle Wrap",
    category: "Vehicle Wrapping",
    image: "Van-1_asrqqo",
    bg: "from-green-900/40 to-brand-dark",
    size: "sm",
  },
  {
    id: "5",
    title: "LED Showroom Display",
    category: "LED & Neon",
    image: "Led-1_uytxez",
    bg: "from-yellow-900/40 to-brand-dark",
    size: "sm",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-brand-charcoal">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel text="Our Work" />
            <h2 className="font-display text-5xl lg:text-6xl text-white leading-tight">
              WORK THAT
              <span className="text-brand-orange"> SPEAKS.</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-white/50 hover:text-brand-orange text-sm transition-colors shrink-0"
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {/* Large card — spans 2 rows */}
          <div className="row-span-2 col-span-2 lg:col-span-1 group relative bg-brand-dark border border-white/8 rounded-2xl overflow-hidden cursor-pointer hover:border-brand-orange/30 transition-all">
            {/* Cloudinary image */}
            <Image
              src={cloudinaryUrl(portfolioItems[0].image, {
                width: 600,
                height: 800,
                crop: "fill",
              })}
              alt={portfolioItems[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${portfolioItems[0].bg} opacity-60`}
            />
            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-2">
                {portfolioItems[0].category}
              </span>
              <h3 className="text-white font-semibold text-xl">
                {portfolioItems[0].title}
              </h3>
            </div>
            <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-colors" />
          </div>

          {/* Small cards */}
          {portfolioItems.slice(1).map((item) => (
            <div
              key={item.id}
              className="group relative bg-brand-dark border border-white/8 rounded-2xl overflow-hidden cursor-pointer hover:border-brand-orange/30 transition-all"
            >
              {/* Cloudinary image */}
              <Image
                src={cloudinaryUrl(item.image, {
                  width: 400,
                  height: 300,
                  crop: "fill",
                })}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-60`}
              />
              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="text-brand-orange text-[10px] font-semibold uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-medium text-sm">{item.title}</h3>
              </div>
              <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-colors" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-500 text-white text-sm font-medium px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-brand-orange/25"
          >
            See All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
