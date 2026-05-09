// src/components/ui/SectionLabel.tsx
import { cn } from "../../lib/utils";

export default function SectionLabel({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <div className="w-8 h-px bg-brand-orange" />
      <span className="text-brand-orange text-xs font-semibold uppercase tracking-[0.2em]">
        {text}
      </span>
    </div>
  );
}
