"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconDatabase,
    IconDeviceMobile,
    IconLayout2,
    IconServer,
    IconTools,
    IconBrandFramer,
    IconRocket
} from "@tabler/icons-react";

export const SkillsDashboard = () => {
    const items = [
        {
            title: "Backend Core",
            description: "Spring Boot 3, Microservices (Java), Node.js (Express), NestJS ⚡",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-charcoal/50 border border-white/5 items-center justify-center group-hover:bg-cyber-green/10 transition-colors"><IconServer className="h-10 w-10 text-cyber-green" /></div>,
            icon: <IconServer className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-2 fire-spray glassmorphism lightning-border buraq-glow shimmer-card",
        },
        {
            title: "Frontend & Mobile",
            description: "Next.js 14, TypeScript, Flutter (Dart), Mobile Native 🚀",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-charcoal/50 border border-white/5 items-center justify-center group-hover:bg-electric-blue/10 transition-colors"><IconLayout2 className="h-10 w-10 text-electric-blue" /></div>,
            icon: <IconLayout2 className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-1 fire-spray glassmorphism lightning-border buraq-glow shimmer-card",
        },
        {
            title: "Databases",
            description: "PostgreSQL, MongoDB, SQL Server 🎯",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-charcoal/50 border border-white/5 items-center justify-center group-hover:bg-yellow-500/10 transition-colors"><IconDatabase className="h-10 w-10 text-yellow-500" /></div>,
            icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-1 fire-spray glassmorphism lightning-border buraq-glow shimmer-card",
        },
        {
            title: "Ecosystem & DevOps",
            description: "Docker, Kubernetes, FB Ads // STATUS: LEARNING_&_GROWING",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-charcoal/50 border border-white/5 items-center justify-center group-hover:bg-orange-500/10 transition-colors"><IconRocket className="h-10 w-10 text-orange-500" /></div>,
            icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-2 fire-spray glassmorphism lightning-border buraq-glow shimmer-card",
        },
    ];

    return (
        <div className="py-20 px-4 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-mono tracking-tighter">
                    THE <span className="text-cyber-green">ARSENAL</span>
                </h2>

                <div className="relative flex flex-col items-center justify-center overflow-hidden">
                    {/* Infinite Scroll Rows */}
                    <div className="flex gap-8 animate-scroll-left hover:[animation-play-state:paused] w-max py-4">
                        {[
                            { name: "React", icon: "⚛️", color: "text-blue-400" },
                            { name: "Angular", icon: "🅰️", color: "text-red-500" },
                            { name: "Next.js", icon: "▲", color: "text-white" },
                            { name: "Flutter", icon: "🦋", color: "text-cyan-400" },
                            { name: "TypeScript", icon: "ts", color: "text-blue-500" },
                            { name: "Spring Boot", icon: "🍃", color: "text-green-500" },
                            { name: "Supabase", icon: "⚡", color: "text-emerald-400" },
                            { name: "PostgreSQL", icon: "🐘", color: "text-blue-300" },
                            { name: "MongoDB", icon: "🍃", color: "text-green-400" },
                            { name: "PHP", icon: "🐘", color: "text-indigo-400" },
                            { name: "Kotlin", icon: "K", color: "text-purple-400" },
                            { name: "Docker", icon: "🐳", color: "text-blue-500" },
                        ].map((skill, i) => (
                            <div key={i} className="group relative">
                                <div className="w-24 h-24 md:w-32 md:h-32 glassmorphism border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-cyber-green/50 transition-all duration-300 hover:scale-110 cursor-pointer buraq-glow">
                                    <span className={`text-3xl md:text-4xl ${skill.color}`}>{skill.icon}</span>
                                    {/* Glass Tooltip */}
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-md border border-violet-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                                        <span className="text-[10px] font-mono text-violet-300 uppercase tracking-widest">{skill.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {[
                            { name: "React", icon: "⚛️", color: "text-blue-400" },
                            { name: "Angular", icon: "🅰️", color: "text-red-500" },
                            { name: "Next.js", icon: "▲", color: "text-white" },
                            { name: "Flutter", icon: "🦋", color: "text-cyan-400" },
                            { name: "TypeScript", icon: "ts", color: "text-blue-500" },
                            { name: "Spring Boot", icon: "🍃", color: "text-green-500" },
                            { name: "Supabase", icon: "⚡", color: "text-emerald-400" },
                            { name: "PostgreSQL", icon: "🐘", color: "text-blue-300" },
                            { name: "MongoDB", icon: "🍃", color: "text-green-400" },
                            { name: "PHP", icon: "🐘", color: "text-indigo-400" },
                            { name: "Kotlin", icon: "K", color: "text-purple-400" },
                            { name: "Docker", icon: "🐳", color: "text-blue-500" },
                        ].map((skill, i) => (
                            <div key={`dup-${i}`} className="group relative">
                                <div className="w-24 h-24 md:w-32 md:h-32 glassmorphism border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-cyber-green/50 transition-all duration-300 hover:scale-110 cursor-pointer buraq-glow">
                                    <span className={`text-3xl md:text-4xl ${skill.color}`}>{skill.icon}</span>
                                    {/* Glass Tooltip */}
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-md border border-violet-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                                        <span className="text-[10px] font-mono text-violet-300 uppercase tracking-widest">{skill.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
