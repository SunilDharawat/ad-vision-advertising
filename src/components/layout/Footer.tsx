// src/components/layout/Footer.tsx
import Link from "next/link";
import { MapPin, Phone, Mail, Send, CircleUser, Video } from "lucide-react";
import { siteConfig, navLinks, services } from "@/src/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal border-t border-white/10">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center">
                <span className="text-white font-display text-lg leading-none">
                  F
                </span>
              </div>
              <span className="font-display text-2xl tracking-wider text-white">
                {siteConfig.name.split(" ")[0]}
                <span className="text-brand-orange">
                  {siteConfig.name.split(" ").slice(1).join(" ")}
                </span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {siteConfig.tagline} — Serving {siteConfig.city} and surrounding
              areas.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-white/5 hover:bg-brand-orange/20 hover:text-brand-orange text-white/50 flex items-center justify-center transition-all"
                >
                  <Send size={16} />
                </a>
              )}
              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-white/5 hover:bg-brand-orange/20 hover:text-brand-orange text-white/50 flex items-center justify-center transition-all"
                >
                  <CircleUser size={16} />
                </a>
              )}
              {siteConfig.socials.youtube && (
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-white/5 hover:bg-brand-orange/20 hover:text-brand-orange text-white/50 flex items-center justify-center transition-all"
                >
                  <Video size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-brand-orange text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-white/50 hover:text-brand-orange text-sm transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-brand-orange mt-0.5 shrink-0"
                />
                <span className="text-white/50 text-sm leading-relaxed">
                  {siteConfig.address}
                  <br />
                  {siteConfig.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-orange shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-white/50 hover:text-brand-orange text-sm transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-orange shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/50 hover:text-brand-orange text-sm transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-6 inline-block bg-brand-orange hover:bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded transition-all"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-5">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Designed &amp; built in {siteConfig.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
