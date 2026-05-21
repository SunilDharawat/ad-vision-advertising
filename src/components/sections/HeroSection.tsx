// src/components/sections/HeroSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, Volume2, VolumeX } from "lucide-react";
import { siteConfig } from "../../lib/config";
import Button from "../../components/ui/Button";
import { cloudinaryUrl } from "../../lib/cloudinary";

// Replace with your actual Cloudinary video public ID
const HERO_VIDEO_ID = "Hero_Video_qvvd6w";

const highlights = [
  "500+ Projects Delivered",
  "Trusted by 200+ Brands",
  "Same-Day Quotes",
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

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
      <div className="section-container relative pt-32 pb-20">
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
              <Button href="/contact" size="lg" className="rounded-full">
                Get a Free Quote <ArrowRight size={18} />
              </Button>
              <Button
                href="/portfolio"
                variant="outline"
                size="lg"
                className="rounded-full"
              >
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

          {/* Right — Visual Card */}
          <div className="relative  animate-fade-in">
            {/* Main card */}
            <div className="relative bg-brand-charcoal border border-white/10 rounded-2xl overflow-hidden aspect-4/3">
              {/* ── Cloudinary video ── */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src={cloudinaryUrl(HERO_VIDEO_ID, {
                  type: "video",
                  width: 800,
                  height: 600,
                })}
                poster={cloudinaryUrl(`${HERO_VIDEO_ID}.jpg`, {
                  type: "video",
                  width: 800,
                  height: 600,
                })}
                autoPlay
                muted={muted}
                loop
                playsInline
              />

              {/* Dim overlay so badges stay readable */}
              <div className="absolute inset-0 bg-black/30" />
              {/* Sound Toggle */}
              <button
                onClick={() => {
                  if (videoRef.current) {
                    const newMuted = !muted;

                    videoRef.current.muted = newMuted;
                    setMuted(newMuted);

                    if (!newMuted) {
                      videoRef.current.play();
                    }
                  }
                }}
                className="absolute bottom-4 right-4 z-20 w-11 h-11 rounded-full bg-black/60 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-brand-orange transition-all"
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

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
