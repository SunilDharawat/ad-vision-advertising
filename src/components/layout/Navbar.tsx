// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/src/lib/config";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/company_log.png"
              alt={siteConfig.name}
              width={50}
              height={50}
              className="rounded object-contain mix-blend-lighten"
              priority
            />
            <span className="font-display text-2xl tracking-wider text-white">
              {siteConfig.name.split(" ")[0]}
              <span className="text-brand-orange">
                {" "}
                {siteConfig.name.split(" ").slice(1).join(" ")}
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-brand-orange bg-brand-orange/10"
                    : "text-white/70 hover:text-white hover:bg-white/5",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-orange transition-colors"
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="bg-brand-orange hover:bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/25"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-charcoal border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-brand-orange bg-brand-orange/10"
                    : "text-white/70 hover:text-white hover:bg-white/5",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-sm text-white/70 px-4 py-2"
            >
              <Phone size={14} /> {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="bg-brand-orange text-white text-sm font-medium px-5 py-3 rounded text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
