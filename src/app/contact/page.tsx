// src/app/contact/page.tsx
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "../../lib/config";
import PageHero from "../../components/ui/PageHero";
import ContactForm from "../../components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Call, WhatsApp, or fill the form — we respond within 2 hours. Free quotes for all advertising and printing projects in Indore.`,
};

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat directly with our team",
    href: `https://wa.me/${siteConfig.whatsapp}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: `${siteConfig.address}, ${siteConfig.city}`,
    href: "#map",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat: 9:00 AM – 8:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title="LET'S TALK"
        titleAccent="ABOUT YOUR PROJECT."
        description="Tell us what you need and we'll get back with a quote within 2 hours. No jargon, no pressure — just straightforward help."
      />

      <section className="section-padding bg-brand-dark">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — Info (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h2 className="font-display text-4xl text-white mb-2">
                  REACH US
                  <span className="text-brand-orange"> ANYTIME.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed">
                  We&#39; re a local team — you can call, WhatsApp, email, or
                  walk in. We prefer to keep things simple.
                </p>
              </div>

              {/* Contact cards */}
              <div className="flex flex-col gap-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 bg-brand-charcoal border border-white/8 hover:border-brand-orange/30 rounded-xl p-4 transition-colors group">
                      <div className="w-10 h-10 bg-brand-orange/10 group-hover:bg-brand-orange/20 rounded-full flex items-center justify-center shrink-0 transition-colors">
                        <Icon size={18} className="text-brand-orange" />
                      </div>
                      <div>
                        <p className="text-white/30 text-xs uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-white text-sm font-medium">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Google Map placeholder */}
              <div
                id="map"
                className="bg-brand-charcoal border border-white/8 rounded-xl overflow-hidden aspect-video flex items-center justify-center"
              >
                <div className="text-center px-4">
                  <MapPin
                    size={32}
                    className="text-brand-orange mx-auto mb-2"
                  />
                  <p className="text-white/30 text-sm">
                    Embed Google Map here —
                  </p>
                  <p className="text-white/20 text-xs mt-1">
                    Replace with an {`<iframe>`} from Google Maps
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Form (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-brand-charcoal border border-white/8 rounded-2xl p-8">
                <h3 className="font-display text-3xl text-white mb-1">
                  GET A FREE QUOTE
                </h3>
                <p className="text-white/40 text-sm mb-8">
                  Fill in the details below — the more you share, the more
                  accurate your quote.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
