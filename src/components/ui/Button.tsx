// src/components/ui/Button.tsx
import Link from "next/link";
import { cn } from "../../lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-brand-orange hover:bg-orange-500 text-white hover:shadow-lg hover:shadow-brand-orange/25 hover:-translate-y-0.5",
    outline:
      "border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
