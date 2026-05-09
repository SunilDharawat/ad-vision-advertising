// src/components/ui/PageHero.tsx
import SectionLabel from "../../components/ui/SectionLabel";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent?: string;
  description: string;
}

export default function PageHero({
  label,
  title,
  titleAccent,
  description,
}: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 bg-brand-dark overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative">
        <SectionLabel text={label} />
        <h1 className="font-display text-6xl lg:text-8xl text-white leading-none mb-6">
          {title}
          {titleAccent && (
            <span className="block text-brand-orange">{titleAccent}</span>
          )}
        </h1>
        <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
