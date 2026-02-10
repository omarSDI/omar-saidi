"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink, IconActivity, IconDatabase, IconLock } from "@tabler/icons-react";

export const FeaturedMission = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-20">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter uppercase mb-4">
                    FEATURED <span className="text-cyber-green">MISSION</span>
                </h2>
                <div className="flex items-center justify-center gap-2 text-xs font-mono text-neutral-500 tracking-widest uppercase">
                    <span>SYSTEM LEVEL 01:</span>
                    <span className="text-neutral-400">[ACTIVE_ENGINE]</span>
                </div>
            </div>

            {/* Main Card */}
            <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden buraq-glow">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                    {/* Left Column: Status Modules */}
                    <div className="lg:col-span-4 space-y-4">
                        {/* Module 1 */}
                        <div className="bg-neutral-900/50 border border-white/5 p-4 rounded-xl flex items-center gap-4 group hover:border-cyber-green/30 transition-colors">
                            <div className="bg-cyber-green/10 p-3 rounded-lg text-cyber-green">
                                <IconActivity size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">LIVE STATUS</div>
                                <div className="text-sm font-mono text-cyber-green font-bold settings-shadow">SYSTEM_ACTIVE</div>
                            </div>
                        </div>

                        {/* Module 2 */}
                        <div className="bg-neutral-900/50 border border-white/5 p-4 rounded-xl flex items-center gap-4 group hover:border-electric-blue/30 transition-colors">
                            <div className="bg-electric-blue/10 p-3 rounded-lg text-electric-blue">
                                <IconDatabase size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">ENGINE SYNC</div>
                                <div className="text-sm font-mono text-white font-bold">Real-time DB // Supabase</div>
                            </div>
                        </div>

                        {/* Module 3 */}
                        <div className="bg-neutral-900/50 border border-white/5 p-4 rounded-xl flex items-center gap-4 group hover:border-yellow-500/30 transition-colors">
                            <div className="bg-yellow-500/10 p-3 rounded-lg text-yellow-500">
                                <IconLock size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">AUTH INTEGRITY</div>
                                <div className="text-sm font-mono text-white font-bold">Secure_Supabase_Auth</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-8 flex flex-col justify-between">
                        <div>
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <h3 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight">Tunis Shoes</h3>
                                <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/20 text-cyber-green text-[10px] font-mono uppercase tracking-wider rounded">ACTIVE_V3_ENGINE</span>
                            </div>

                            <p className="text-neutral-400 text-lg leading-relaxed italic border-l-2 border-cyber-green pl-6 mb-8">
                                "A mission-critical E-commerce ecosystem engineered for high impact. Developed using Next.js 15 (App Router) and Supabase for a seamless architecture with real-time inventory management and secure authentication."
                            </p>

                            {/* Live Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                <div className="bg-neutral-900/30 border border-white/5 p-4 rounded-lg">
                                    <div className="text-[9px] text-neutral-600 uppercase tracking-widest mb-1">UP_TIME</div>
                                    <div className="text-xl font-mono text-cyber-green font-bold">99.95%</div>
                                </div>
                                <div className="bg-neutral-900/30 border border-white/5 p-4 rounded-lg">
                                    <div className="text-[9px] text-neutral-600 uppercase tracking-widest mb-1">INVENTORY</div>
                                    <div className="text-xl font-mono text-electric-blue font-bold">126 UNIT</div>
                                </div>
                                <div className="col-span-2 md:col-span-1 bg-neutral-900/30 border border-white/5 p-4 rounded-lg">
                                    <div className="text-[9px] text-neutral-600 uppercase tracking-widest mb-1">REAL-TIME STREAM</div>
                                    <div className="text-xs font-mono text-neutral-300 animate-pulse">Supabase Edge Functions Active...</div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-10">
                                {["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-400 text-xs font-mono rounded hover:bg-white/10 transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                            <a href="https://github.com/omarSDI" target="_blank" rel="noopener noreferrer" className="flex-1 bg-black border border-white/10 text-white py-4 rounded-xl font-mono text-sm uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group">
                                <IconBrandGithub size={18} className="group-hover:text-cyber-green transition-colors" />
                                Source Code
                            </a>
                            <a href="https://omarsaidi.dev" target="_blank" rel="noopener noreferrer" className="flex-1 bg-cyber-green text-black py-4 rounded-xl font-mono text-sm uppercase tracking-widest font-bold hover:bg-cyber-green/90 transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] flex items-center justify-center gap-2">
                                <IconExternalLink size={18} />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-electric-blue/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            </div>
        </section>
    );
};
