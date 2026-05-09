// src/components/sections/ServicesSection.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "../../lib/config";
import SectionLabel from "../../components/ui/SectionLabel";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <SectionLabel text="What We Do" />
          <h2 className="font-display text-5xl lg:text-6xl text-white leading-tight mb-4">
            EVERY FORMAT.
            <span className="text-brand-orange"> EVERY SURFACE.</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            From a single banner to a city-wide campaign — we handle the print,
            the branding, the digital, and everything in between.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services#${service.slug}`}
              className="group relative bg-brand-charcoal border border-white/8 hover:border-brand-orange/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/5"
            >
              {/* Index number */}
              <span className="absolute top-5 right-5 font-display text-5xl text-white/5 group-hover:text-brand-orange/10 transition-colors leading-none">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="text-3xl mb-5">{service.icon}</div>

              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-brand-orange text-sm font-medium opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                Learn more <ArrowRight size={14} />
              </div>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">
            Not sure what you need? Let&#39;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-brand-orange hover:text-white border border-brand-orange hover:bg-brand-orange text-sm font-medium px-6 py-3 rounded transition-all"
          >
            Discuss Your Project <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
