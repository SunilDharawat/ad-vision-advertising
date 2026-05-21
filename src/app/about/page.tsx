// src/app/about/page.tsx
import type { Metadata } from "next";
import { CheckCircle, Users, Award, MapPin } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "../../lib/config";
import PageHero from "../../components/ui/PageHero";
import SectionLabel from "../../components/ui/SectionLabel";
import StatsSection from "../../components/sections/StatsSection";
import CtaBanner from "../../components/sections/CtaBanner";
import { de } from "zod/v4/locales";
import Image from "next/image";
import { cloudinaryUrl } from "@/src/lib/cloudinary";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — ${siteConfig.city}'s trusted advertising and printing partner. 8+ years of experience, 200+ happy clients, and a team that cares about your brand.`,
};

const values = [
  {
    icon: "speed_ecebk5",
    title: "Speed Without Compromise",
    description:
      "Fast doesn't mean sloppy. We built systems to deliver on tight deadlines without cutting corners on quality.",
  },
  {
    icon: "result_vw1o7x",
    title: "Results-First Thinking",
    description:
      "Every banner, board, and campaign is designed with one goal — getting more eyes on your business.",
  },
  {
    icon: "longterm_t1dsss",
    title: "Long-Term Partnerships",
    description:
      "Most of our clients have been with us for years. We grow when you grow, and that keeps us invested in your success.",
  },
  {
    icon: "local_vmn1e6",
    title: "Local Expertise",
    description:
      "We know Indore's markets, localities, and audiences. That knowledge shapes better advertising decisions.",
  },
];

const team = [
  {
    name: "Raj Chuorasiya",
    designation: "Director & Founder",
    initial: "Y",
    color: "bg-brand-orange",
  },
  {
    name: "Aditya Singh",
    designation: "Production Head",
    initial: "A",
    color: "bg-blue-700",
  },
  {
    name: "Nikita Gupta",
    designation: "Digital Marketing Lead",
    initial: "R",
    color: "bg-purple-700",
  },
  {
    name: "Sunil Dharawat",
    designation: "Developent Lead",
    initial: "S",
    color: "bg-green-700",
  },
];

const milestones = [
  {
    year: "2016",
    event: "Founded in Indore with a single flex printing machine",
  },
  {
    year: "2018",
    event: "Expanded to hoarding fabrication and event branding",
  },
  {
    year: "2020",
    event: "Launched digital marketing services during the digital boom",
  },
  {
    year: "2022",
    event: "Crossed 100+ active clients, added vehicle wrapping division",
  },
  {
    year: "2024",
    event: "500+ projects milestone, LED & neon signage division added",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="THE TEAM BEHIND"
        titleAccent="YOUR BRAND."
        description={`${siteConfig.name} has been helping businesses in ${siteConfig.city} look their best — in print, on screens, and everywhere in between — since 2016.`}
      />

      {/* Story Section */}
      <section className="section-padding bg-brand-dark">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Our Story" />
              <h2 className="font-display text-5xl text-white mb-6">
                STARTED SMALL.
                <span className="text-brand-orange block">
                  STAYED OBSESSED.
                </span>
              </h2>
              <div className="space-y-4 text-white/50 text-base leading-relaxed">
                <p>
                  We started in 2016 with one flex printing machine and a simple
                  belief — local businesses deserve advertising that actually
                  looks professional without costing a fortune.
                </p>
                <p>
                  Eight years later, we've grown into a full-service advertising
                  studio serving 200+ businesses across Indore and Madhya
                  Pradesh. But our approach hasn't changed: quality materials,
                  honest pricing, and showing up when you need us.
                </p>
                <p>
                  We work with everyone from small shop owners getting their
                  first signboard to large corporates running multi-city
                  campaigns. Every project gets the same attention to detail.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-brand-orange" />
                  <span className="text-white/60 text-sm">
                    {siteConfig.city}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-brand-orange" />
                  <span className="text-white/60 text-sm">Est. 2016</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-brand-orange" />
                  <span className="text-white/60 text-sm">Team of 12</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
              <div className="space-y-8 pl-12">
                {milestones.map((m) => (
                  <div key={m.year} className="relative">
                    <div className="absolute -left-[2.05rem] w-4 h-4 rounded-full bg-brand-orange border-4 border-brand-dark" />
                    <span className="font-display text-brand-orange text-xl">
                      {m.year}
                    </span>
                    <p className="text-white/60 text-sm mt-1 leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Values */}
      <section className="section-padding bg-brand-charcoal">
        <div className="section-container">
          <div className="text-center mb-14">
            <SectionLabel text="Our Values" className="justify-center" />
            <h2 className="font-display text-5xl text-white">
              HOW WE <span className="text-brand-orange">WORK.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-brand-dark border border-white/8 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors"
              >
                {/* <div className="text-3xl mb-4">{v.icon}</div> */}
                <Image
                  src={cloudinaryUrl(v.icon)}
                  alt={v.title}
                  width={120}
                  height={120}
                />
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-brand-dark">
        <div className="section-container">
          <div className="text-center mb-14">
            <SectionLabel text="The Team" className="justify-center" />
            <h2 className="font-display text-5xl text-white">
              PEOPLE WHO <span className="text-brand-orange">DELIVER.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-brand-charcoal border border-white/8 rounded-2xl p-6 text-center hover:border-brand-orange/30 transition-colors"
              >
                <div
                  className={`w-16 h-16 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="font-display text-2xl text-white">
                    {member.initial}
                  </span>
                </div>
                <p className="text-white/50 text-sm">{member.name}</p>
                <p className="text-white/20 text-xs mt-1">
                  {member.designation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
