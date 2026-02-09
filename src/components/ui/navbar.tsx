"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Brand Logo with Galactic Glow */}
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative group flex items-center gap-3"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-electric-blue/30 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Logo Image */}
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(0,229,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-shadow duration-500">
                        <Image
                            src="/logo.png"
                            alt="Omar Saidi"
                            fill
                            className="object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                if (target.parentElement) {
                                    target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full bg-black text-cyber-green font-mono text-sm font-bold">OS</div>';
                                }
                            }}
                        />
                    </div>

                    {/* Text Brand */}
                    <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
                        OMAR<span className="text-cyber-green">.</span>SAIDI
                    </span>
                </motion.a>

                {/* Status Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-2"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
                        System_Online
                    </span>
                </motion.div>
            </div>
        </nav>
    );
};
