// src/components/sections/WhyUsSection.tsx
import { Zap, Shield, Clock, HeartHandshake } from "lucide-react";
import SectionLabel from "../../components/ui/SectionLabel";

const reasons = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Most orders ready in 24–48 hours. We understand that deadlines are real.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "Premium materials, vibrant colours, and finishes that last through weather and time.",
  },
  {
    icon: Clock,
    title: "End-to-End Service",
    description:
      "Design, print, and installation — we manage the whole process so you don't have to.",
  },
  {
    icon: HeartHandshake,
    title: "Local & Reliable",
    description:
      "Based in Indore, we understand local markets and deliver where others don't.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-linear-to-l from-brand-orange/3 to-transparent pointer-events-none" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionLabel text="Why Choose Us" />
            <h2 className="font-display text-5xl lg:text-6xl text-white leading-tight mb-6">
              WE DON&apos;T JUST
              <span className="text-brand-orange"> PRINT.</span>
              <span className="block">WE PERFORM.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Every business deserves advertising that actually works. We
              combine craft, technology, and local market knowledge to make your
              brand stand out in the crowd.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-brand-gray border-2 border-brand-dark flex items-center justify-center text-xs text-white/60"
                  >
                    {["A", "R", "S", "M"][i]}
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-sm">
                Trusted by <span className="text-white">200+ businesses</span>{" "}
                in MP
              </p>
            </div>
          </div>

          {/* Right — reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-brand-charcoal border border-white/8 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors group"
                >
                  <div className="w-11 h-11 bg-brand-orange/10 group-hover:bg-brand-orange/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <Icon size={20} className="text-brand-orange" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
