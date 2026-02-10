"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/sections/hero";
import { SkillsDashboard } from "@/components/sections/skills-dashboard";
import { FeaturedMission } from "@/components/sections/featured-mission";
import { Terminal } from "@/components/ui/terminal";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <LoadingScreen />

      {/* High-Impact Start */}
      <Hero />

      <div className="max-w-7xl mx-auto space-y-32 pb-40 pt-10 px-4">

        {/* INTEGRATED ARCHIVE VAULT */}
        <section id="archive-vault" className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tighter uppercase">
              ARCHIVE <span className="text-neutral-500">VAULT</span>
            </h2>
            <p className="text-[10px] text-neutral-600 uppercase tracking-[0.5em] mt-2">Historic Portfolio Footprints</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Platforme de Troc",
                desc: "Digital exchange platform for complex swapping logic.",
                tech: ["Java", "Spring Boot", "Angular", "MySQL"],
                ref: "ISET-B2-EXCHANGE"
              },
              {
                title: "Tourisme Tunisie",
                desc: "Java application for site localization and travel cost estimation.",
                tech: ["Java", "MySQL"],
                ref: "TRAVEL-LOCALIZER"
              },
              {
                title: "Stock Management (Lilas)",
                desc: "Needs analysis and data modeling for retail inventory.",
                tech: ["HTML", "CSS", "JS", "MySQL"],
                ref: "LILAS-RETAIL"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1, duration: 0.5 }
                }}
                viewport={{ once: true, margin: "-5%" }}
                className="group glassmorphism p-6 border border-white/5 relative overflow-hidden lightning-border buraq-glow"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[8px] text-neutral-600 font-mono tracking-widest">{project.ref}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-cyber-green transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase group-hover:text-cyber-green transition-colors mb-2">{project.title}</h3>
                <p className="text-[11px] text-neutral-400 mb-4 leading-relaxed italic">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(t => (
                    <span key={t} className="text-[7px] text-neutral-500 bg-white/5 px-2 py-0.5 border border-white/5 uppercase font-mono">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Console / Utility */}
        <section id="console-section" className="px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 font-mono tracking-tighter">
            UTILITY <span className="text-cyber-green">CONSOLE</span>
          </h2>
          <Terminal />
        </section>

        {/* Skills / Experience */}
        <section id="skills-section">
          <SkillsDashboard />
        </section>

        {/* Contact Intelligence */}
        <Contact />

        {/* THE FINALE: About Me / Bio */}
        <section id="about-me-finale" className="max-w-4xl mx-auto space-y-16 py-20 border-t border-white/5">
          <div className="text-center">
            <h2 className="text-[10px] font-mono text-cyber-green mb-4 uppercase tracking-[0.5em]">IDENTITY_DECRYPTED</h2>
            <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter uppercase mb-8">
              SYSTEM <span className="text-neutral-500">DECRYPTION</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2 space-y-8">
              <p className="text-neutral-300 text-xl leading-relaxed font-sans italic">
                "I am Omar Saidi, a Full Stack Developer dedicated to making a digital impact. I don't just write code; I engineer ecosystems. Currently a student at ISET Béja, exploring the intersection of robust backend (Spring Boot 3) and cutting-edge frontend (Next.js/TS)."
              </p>

              <div className="flex flex-wrap gap-4 font-mono text-xs">
                <span key="pfe" className="px-3 py-1 border border-cyber-green/30 text-cyber-green rounded-full">🚀 PFE_JOURNEY_INITIATED</span>
                <span key="impact" className="px-3 py-1 border border-electric-blue/30 text-electric-blue rounded-full">⚡ IMPACT_MINDSET</span>
                <span key="scalable" className="px-3 py-1 border border-yellow-500/30 text-yellow-500 rounded-full">🎯 BUILDING_TO_IMPACT</span>
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed">
                Dedicated to building high-performance solutions that scream "Build to Impact." With a mastery of Spring Boot 3 and modern TypeScript environments, my mission is to transform complex business logic into seamless digital realities.
              </p>

              <div className="pt-4 flex flex-wrap gap-6 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-[8px] text-neutral-600 uppercase tracking-widest mb-1">Secure_Email</span>
                  <a href="mailto:saidiomar537@gmail.com" className="text-xs text-cyber-green hover:underline">saidiomar537@gmail.com</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] text-neutral-600 uppercase tracking-widest mb-1">Direct_Comm</span>
                  <span className="text-xs text-electric-blue">+216 27 566 936</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ filter: "grayscale(100%)", opacity: 0 }}
              whileInView={{
                filter: "grayscale(0%)",
                opacity: 1,
                transition: { duration: 1.5, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-20%" }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green/20 to-electric-blue/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-white/10 glassmorphism buraq-glow">
                <Image
                  src="/assets/omar.jpg"
                  alt="Omar Saidi"
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-2 left-2 text-[8px] text-cyber-green/50 font-mono animate-pulse uppercase">Identity_Verified_//_Impact_Protocol</div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <footer className="py-10 border-t border-white/10 text-center font-mono text-xs text-neutral-500 uppercase tracking-widest">
        &copy; 2026 OMAR | FULL STACK DEVELOPER | ALL RIGHTS RESERVED
      </footer>
    </main>
  );
}
