"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconArrowDown, IconBriefcase } from "@tabler/icons-react";
import { Marquee } from "@/components/ui/marquee";

export const Hero = () => {
    const words = [
        { text: "Développeur", className: "text-white" },
        { text: "Full-Stack", className: "text-cyber-green" },
    ];

    return (
        <section id="home" className="min-h-screen w-full flex flex-col items-center justify-between relative overflow-hidden bg-black pt-32 pb-0">
            <BackgroundBeams />
            
            <div className="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center flex-1">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-xs font-semibold tracking-wide uppercase">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green"></span>
                        </span>
                        Disponible pour missions
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter">
                        <span className="block text-white">OMAR</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-electric-blue">
                            SAIDI
                        </span>
                    </h1>

                    <div className="text-2xl sm:text-3xl font-medium text-neutral-300 flex items-center gap-3">
                        <span>Je suis</span>
                        <TypewriterEffect words={words} className="text-2xl sm:text-3xl font-bold font-mono text-left" cursorClassName="h-6 sm:h-8" />
                    </div>

                    <p className="text-neutral-400 text-lg max-w-lg leading-relaxed">
                        Diplômé en Licence en Développement des Systèmes d'Informations (ISET Béja). Spécialisé dans la création d'architectures robustes, d'applications web modernes et de systèmes back-end performants.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Link href="#portfolio" className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
                            Voir mes projets
                        </Link>
                        <Link href="#contact" className="px-8 py-3.5 bg-transparent text-white border border-white/20 font-semibold rounded-full hover:bg-white/5 transition-colors">
                            Me contacter
                        </Link>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mx-auto w-64 sm:w-80 md:w-full md:max-w-md mt-8 md:mt-0"
                >
                    <div className="relative aspect-square rounded-full">
                        {/* Glowing Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyber-green/30 to-electric-blue/30 rounded-full blur-3xl opacity-50 animate-pulse" />
                        
                        {/* Badges */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }} 
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 -left-6 z-20 bg-black border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-xl backdrop-blur-md"
                        >
                            <div className="p-2 bg-yellow-500/20 text-yellow-500 rounded-lg"><IconBriefcase className="w-5 h-5" /></div>
                            <div>
                                <p className="text-xs text-neutral-400">Expérience</p>
                                <p className="text-sm font-bold text-white">Full Stack</p>
                            </div>
                        </motion.div>

                        {/* Profile Image Container */}
                        <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden bg-neutral-900 z-10">
                            <Image
                                src="/assets/omar.jpg"
                                alt="Omar Saidi Profile"
                                fill
                                className="object-cover"
                                priority
                                onError={(e) => {
                                    const target = e.target as any;
                                    target.style.display = 'none';
                                    target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full bg-neutral-900 text-cyber-green font-mono text-6xl font-bold">OS</div>';
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="w-full mt-12 z-20">
                <Marquee />
            </div>
        </section>
    );
};
