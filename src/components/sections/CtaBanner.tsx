// src/components/sections/CtaBanner.tsx
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "../../lib/config";

export default function CtaBanner() {
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi! I'd like to get a quote for my project.")}`;

  return (
    <section className="py-20 bg-brand-orange relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Big text bg */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display text-[15vw] text-white/10 leading-none whitespace-nowrap">
          LET&apos;S WORK TOGETHER
        </span>
      </div>
      <div
        className="section-container relative text-center"
        style={{ maxWidth: "56rem" }}
      >
        <h2 className="font-display text-5xl lg:text-7xl text-white mb-4">
          READY TO GET STARTED?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Tell us about your project and get a free quote within 2 hours. No
          commitment required.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-orange hover:bg-brand-dark hover:text-white font-semibold px-8 py-4 rounded transition-all text-sm"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-orange font-semibold px-8 py-4 rounded transition-all text-sm"
          >
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
