"use client";
import React from "react";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { About } from "@/components/sections/about";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { Portfolio } from "@/components/sections/portfolio";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyber-green selection:text-black">
      <LoadingScreen />
      
      <Navbar />

      <Hero />

      <About />

      <Portfolio />
      
      <Experience />

      <div className="max-w-7xl mx-auto px-4">
        <Contact />
      </div>

      <footer className="py-10 border-t border-white/10 text-center font-mono text-xs text-neutral-500 uppercase tracking-widest mt-20 bg-black">
        <p>&copy; {new Date().getFullYear()} OMAR SAIDI | FULL STACK DEVELOPER | ALL RIGHTS RESERVED</p>
      </footer>
    </main>
  );
}
