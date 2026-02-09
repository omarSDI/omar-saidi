"use client";
import React, { useState, useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import Image from "next/image";

const useTypewriter = (lines: string[], speed = 80, pauseBetween = 600) => {
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayed, setDisplayed] = useState<string[]>([]);

    useEffect(() => {
        if (lineIndex >= lines.length) return;

        if (charIndex <= lines[lineIndex].length) {
            const timeout = setTimeout(() => {
                const current = [...displayed];
                current[lineIndex] = lines[lineIndex].slice(0, charIndex);
                setDisplayed(current);
                setCharIndex(charIndex + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setLineIndex(lineIndex + 1);
                setCharIndex(0);
            }, pauseBetween);
            return () => clearTimeout(timeout);
        }
    }, [lineIndex, charIndex, lines, speed, pauseBetween, displayed]);

    return { displayed, isDone: lineIndex >= lines.length };
};

export const Hero = () => {
    const { displayed, isDone } = useTypewriter(
        ["OMAR SAIDI", "BUILDING SCALABLE SOLUTIONS"],
        70,
        500
    );

    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black py-20">
            <BackgroundBeams />
            <div className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative group mb-12"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green/50 to-electric-blue/50 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                    {/* Glowing Crown Aura */}
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="absolute -inset-4 bg-gradient-to-b from-electric-blue/30 via-transparent to-transparent rounded-full blur-2xl z-0"
                    />

                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/10 glassmorphism shadow-2xl flex items-center justify-center bg-neutral-900 group-hover:scale-105 transition-transform duration-500">
                        {/* High-Impact Glass Overlay with Glitch Effect */}
                        <motion.div
                            animate={{
                                opacity: [0.05, 0.15, 0.05],
                                x: [0, -2, 2, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute inset-0 z-10 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"
                        />

                        {/* Static Glitch Blur */}
                        <div className="absolute bottom-0 left-0 right-0 h-4 bg-cyber-green/20 blur-md z-20 group-hover:h-8 transition-all opacity-50" />

                        <motion.div
                            initial={{ filter: "grayscale(100%)" }}
                            whileInView={{ filter: "grayscale(0%)" }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="/assets/omar.jpg"
                                alt="Omar Saidi"
                                fill
                                className="object-cover relative z-0"
                                priority
                                onError={(e) => {
                                    const target = e.target as any;
                                    target.style.display = 'none';
                                    target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full bg-charcoal text-cyber-green font-mono text-4xl font-bold">OS</div>';
                                }}
                            />
                        </motion.div>
                    </div>
                    {/* Floating Orbits */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-cyber-green/20 blur-xl animate-pulse" />
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-electric-blue/20 blur-xl animate-pulse" />
                </motion.div>

                {/* Typewriter Name */}
                <div className="text-center mb-4 w-full min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem]">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tighter uppercase">
                        {displayed[0] || ""}
                        {!isDone && displayed[1] === undefined && (
                            <span className="inline-block w-[3px] h-[1em] bg-cyber-green ml-1 animate-pulse align-baseline" />
                        )}
                    </h1>
                </div>

                {/* Typewriter Tagline */}
                <div className="text-center mb-6 w-full min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-mono tracking-tighter uppercase text-cyber-green">
                        {displayed[1] || ""}
                        {!isDone && displayed[1] !== undefined && (
                            <span className="inline-block w-[3px] h-[1em] bg-cyber-green ml-1 animate-pulse align-baseline" />
                        )}
                    </h2>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isDone ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className={`text-neutral-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed mb-10 text-center px-2 ${isDone ? "" : "opacity-0"}`}
                >
                    Elite Full Stack Developer & IT Specialist. <br />
                    <span className="text-white/50">ISET Béja // Secure Archive</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isDone ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`flex items-center gap-8 ${isDone ? "" : "opacity-0"}`}
                >
                    <div className="h-[1px] w-12 bg-white/10" />
                    <span className="text-[10px] text-neutral-600 uppercase tracking-[0.5em] font-mono">Status: Connected</span>
                    <div className="h-[1px] w-12 bg-white/10" />
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-neutral-600 rounded-full" />
                </div>
            </div>
        </section>
    );
};
