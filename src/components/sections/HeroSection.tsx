// src/components/sections/HeroSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { siteConfig } from "../../lib/config";
import Button from "../../components/ui/Button";

const highlights = [
  "500+ Projects Delivered",
  "Trusted by 200+ Brands",
  "Same-Day Quotes",
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax on scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Big background text */}
      <div
        ref={ref}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display text-[22vw] text-white/2 leading-none whitespace-nowrap">
          PRINT BRAND GROW
        </span>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="animate-fade-up">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-orange" />
              <span className="text-brand-orange text-xs font-semibold uppercase tracking-[0.2em]">
                {siteConfig.city}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
              PRINT
              <span className="block text-brand-orange">BOLD.</span>
              <span className="block">MARKET</span>
              <span className="block text-white/40">LOUDER.</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              From flex banners to full event branding — we make your business
              impossible to ignore. Premium quality, fast turnaround, unbeatable
              rates.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button href="/contact" size="lg">
                Get a Free Quote <ArrowRight size={18} />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Our Work
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <CheckCircle
                    size={15}
                    className="text-brand-orange shrink-0"
                  />
                  <span className="text-white/50 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual Card Stack */}
          <div className="relative hidden lg:block animate-fade-in">
            {/* Main card */}
            <div className="relative bg-brand-charcoal border border-white/10 rounded-2xl overflow-hidden aspect-4/3">
              {/* Placeholder — replace with your real image */}
              <div className="absolute inset-0 bg-linear-to-br from-brand-orange/20 to-brand-dark flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-orange/30">
                    <Play size={32} className="text-brand-orange ml-1" />
                  </div>
                  <p className="text-white/40 text-sm">
                    Add your hero image or video here
                  </p>
                  <p className="text-white/20 text-xs mt-1">
                    Recommended: 800×600px
                  </p>
                </div>
              </div>

              {/* Floating badge — top left */}
              <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
                <p className="text-white/40 text-xs">Projects</p>
                <p className="text-white font-display text-2xl leading-none">
                  500+
                </p>
              </div>
            </div>

            {/* Floating card — bottom left */}
            <div className="absolute -bottom-6 -left-6 bg-brand-charcoal border border-white/10 rounded-xl p-4 shadow-xl w-44">
              <p className="text-white/40 text-xs mb-1">This month</p>
              <p className="text-white font-semibold text-sm">
                48 orders delivered
              </p>
              <div className="mt-2 h-1 bg-white/10 rounded">
                <div
                  className="h-1 bg-brand-orange rounded"
                  style={{ width: "76%" }}
                />
              </div>
            </div>

            {/* Floating card — top right */}
            <div className="absolute -top-4 -right-4 bg-brand-orange rounded-xl px-4 py-3 shadow-xl">
              <p className="text-white text-xs font-medium">⚡ Fast Delivery</p>
              <p className="text-white/80 text-xs">24–48 hrs turnaround</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-brand-orange rounded-full" />
        </div>
      </div>
    </section>
  );
}
