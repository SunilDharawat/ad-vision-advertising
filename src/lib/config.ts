// src/lib/config.ts
import { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  name: "Ad Vision Advertising",
  tagline: "Print Bold. Market Louder.",
  description:
    "Indore's trusted partner for flex printing, hoardings, event branding, digital marketing, and all advertising solutions. Quality that speaks before you do.",
  url: "https://advisionadvertising.com",
  phone: "+91-9874563210",
  whatsapp: "91-9874563210",
  email: "advisionadvertising@gmail.com",
  address: "123 Main Street",
  city: "Indore, Madhya Pradesh",
  socials: {
    instagram: "https://instagram.com/advisionadvertising",
    facebook: "https://facebook.com/advisionadvertising",
    youtube: "https://youtube.com/@advisionadvertising",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "1",
    title: "Flex Printing",
    slug: "flex-printing",
    description:
      "Large format flex boards, banners, and hoardings with vibrant colour output.",
    icon: "🖨️",
  },
  {
    id: "2",
    title: "Hoarding & Signage",
    slug: "hoarding-signage",
    description:
      "Outdoor hoardings, shop signboards, and road-facing displays.",
    icon: "🏗️",
  },
  {
    id: "3",
    title: "Event Branding",
    slug: "event-branding",
    description:
      "Complete event setups — backdrops, standees, stage branding, and décor.",
    icon: "🎪",
  },
  {
    id: "4",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Social media management, Google Ads, and online presence building.",
    icon: "📱",
  },
  {
    id: "5",
    title: "Vehicle Wrapping",
    slug: "vehicle-wrapping",
    description: "Full and partial vehicle wraps for mobile brand visibility.",
    icon: "🚐",
  },
  {
    id: "6",
    title: "LED & Neon Displays",
    slug: "led-neon-displays",
    description:
      "Custom LED signs, neon-style displays, and illuminated boards.",
    icon: "💡",
  },
];
